import React,{useState} from 'react'
import {Bars} from '../Bars/Bars'
import {PlayControls} from '../PlayControls/PlayControls'
import {Info} from '../Info/Info'
import {generate_arr} from '../../algorithms/Helpers'
import {getTrace} from '../../algorithms/Helpers'
import { Console } from '../Console/Console'
import './SortChart.css'

export const SortChart = (props) => {

    const [length,setLen] = useState(20)
    const [algo,setAlgo] = useState('SS')
    const [orient,setOrient] = useState('asc')
    const [speed,setSpeed] = useState(50)

    const [arr, setArr] = useState([...generate_arr(length+5)])

    const [oricol,setOriCol] = useState('#FFFF00')
    const [compcol,setCompCol] = useState('#FF0000')
    const [swapcol,setSwapCol] = useState('#006400')
    const [color,setColor] = useState(arr.map(e => oricol))

    const [trace,setTrace] = useState(getTrace([...arr],algo,orient))
    const [currentStep,setCurrentStep] = useState(-1)
    const [timeouts,settimeout_ids] = useState([])
    const [isOn,setOn] = useState(false)

    const reset_timeouts = () => {
        timeouts.forEach(e => {
            clearTimeout(e)
        })
        settimeout_ids([])
    }

    const start_timeouts = (trace) => {
        let time = []
        let timer = (105-speed)*25/length
        let x=-1,y=-1
        trace.forEach((item,i) => {
            let id
            if (item.x == undefined) {
                id = setTimeout(() => {
                    setArr([...item])
                    setCurrentStep(prev => prev + 1)
                },i * timer)
            }else{
                id = setTimeout(() => {
                    handleColorChange(x,y,oricol)
                    handleColorChange(item.x,item.y,item.swap? swapcol:compcol)
                    x=item.x
                    y=item.y
                    setCurrentStep(prev => prev + 1)
                },i * timer)
            }
            time.push(id)
        })

        let timeoutId = setTimeout(() => {
            handleColorChange(x,y,oricol)
            settimeout_ids([])
            setCurrentStep(-1)
            setOn(false)
        },trace.length * timer)

        time.push(timeoutId);

        settimeout_ids([...time])
    }

    const handleGenArray = (len) => {
        reset_timeouts()
        let temp = generate_arr(len+5)
        setTrace([...getTrace(temp,algo,orient)])
        setArr([...temp.map(e => 0)])
        setArr([...temp])
        setColor([...temp.map(e => oricol)])
        setOn(false)
    }

    const handleArrayChange = (bars) => {
        setArr([...bars])
    }

    const handleColorChange =(x,y,z) => {
        if(x != -1){
            color[x] = z
        }
        if(y != -1){
            color[y] = z
        }
        setColor([...color]) 
    }

    const handlePause = () => {
        setOn(false)
        reset_timeouts()
    }

    const handlePlay = () => {
        clearPrevStep()
        let t
        if(currentStep == -1){
            t = trace
        }else if(currentStep == trace.length-1){
            reset_timeouts()
            setCurrentStep(-1)
            t = trace
        }else{
            t = trace.slice(currentStep+1)
        }
        setOn(true)
        start_timeouts(t)
    }

    const displayStep = (step) => {
        if(step<0 || step>trace.length-1){
            return
        }
        let item = trace[step]
        if (item.x == undefined) {
            setArr([...item])
            setCurrentStep(step)
        }else{
            handleColorChange(item.x,item.y,item.swap? swapcol:compcol)
            setCurrentStep(step)
        }
    }

    const handleForward = () => {
        handlePause()
        clearPrevStep()
        displayStep(currentStep+1)
    }

    const handleBackward = () => {
        handlePause()
        clearPrevStep()
        displayStep(currentStep-1)
    }

    const handleClear = (len) => {
        reset_timeouts()
        setTrace([])
        setOn(false)
        setCurrentStep(-1)
        handleGenArray(len)
    }

    const clearPrevStep = () => {
        let step = currentStep
        if(step != -1){
            let item = trace[step]
            while(item.x == undefined){
                item = trace[--step]
            }
            handleColorChange(item.x,item.y,oricol)
        }
    }

    const getLastArr = (arr) => {
        let len = trace.length - 1
        while(true){
            if(trace[len].x == undefined){
                return trace[len]
            }
            len--
        }
    }

    const skipToLast = () => {
        handlePause()
        setArr(getLastArr(trace))
        clearPrevStep()
        setCurrentStep(trace.length-1)
    }

    return(
        <div style={
            {...props.style,
            border:`1px solid ${props.style.background}`
            }} 
            className='sorted'
        >
            <Console
                algo={algo}
                orient={orient}
                len={length}
                speed={speed}
                isOn={isOn}
                style={props.style}
                handleSpeed={e => setSpeed(e)}
                handleLen={e => {
                    setLen(e)
                    handleClear(e)
                }}
                handleAlgo={e =>  {
                    setAlgo(e)
                    reset_timeouts()
                    clearPrevStep()
                    setArr([...trace[0]])
                    setTrace([])
                    setOn(false)
                    setCurrentStep(-1)
                    setTrace([...getTrace([...arr],e,orient)])
                }}
                handleOrient={e => {
                    setOrient(e)
                    reset_timeouts()
                    setArr([...trace[0]])
                    setTrace([])
                    setOn(false)
                    setCurrentStep(-1)
                    setTrace([...getTrace([...arr],algo,e)])
                }}
                handleDarkMode={props.handleDarkMode}
                handleGen={() => handleGenArray(length)}
                handleOriColor={(e) => {
                        setOriCol(e)
                        setColor([...arr.map(e => oricol)])
                    }
                }
                handleCompColor={(e) => setCompCol(e)}
                handleSwapColor={(e) => setSwapCol(e)}
            /> 
            <Bars data={arr} color={color} speed={speed/100}/>
            <PlayControls 
                isOn={isOn}
                play={handlePlay} 
                pause={handlePause}
                clear={() => handleClear(length)}
                forward={handleForward}
                backward={handleBackward}
                skip={skipToLast}
            />
            <Info algo={algo} style={props.style}/>
        </div>
    )
}