import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import {Toolbar} from '../Toolbar/Toolbar'

import {Button} from '../Button/Button'
import './Console.css'

export const Console = (props) => {
    let [drawer,setDrawer] = useState(false)

    let toggle = () => {
        if (drawer)
            setDrawer(false)
        else
            setDrawer(true)
    }

    return(
    <div className='main'>
        <Typography className='header' variant='h4' color='secondary'>Sorting Visualizer</Typography>
        <Toolbar
            drawer={drawer}
            toggle={toggle}
            algo={props.algo}
            orient={props.orient}
            len={props.len}
            speed={props.speed+5}
            style={props.style}
            handleSpeed={props.handleSpeed}
            handleLen={props.handleLen}
            handleAlgo={props.handleAlgo}
            handleOrient={props.handleOrient}
            handleDarkMode={props.handleDarkMode}
            handleCompColor={props.handleCompColor}
            handleSwapColor={props.handleSwapColor}
            handleOriColor={props.handleOriColor}
        />
        <div className='buttons'>
            <Button text='Settings' func={toggle}/>
            <Button text='Generate New Array' func={props.handleGen} isOn={props.isOn}/>
        </div>
    </div>
)}