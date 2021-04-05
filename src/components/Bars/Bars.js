import React,{useState} from 'react'
import {Bar} from './Bar'

export const Bars = (props) => {
    const [width,setWidth] = useState(window.innerWidth)
    
    let len = props.data.length

    let bars = props.data.map((e,index) => 
    <Bar key={index} 
         value={e} 
         color={props.color[index]} 
         width={(window.innerWidth/2.18)/len}
         speed={props.speed}
    />
    )

    window.addEventListener('resize',() => {
        setTimeout(() => {
            setWidth(window.innerWidth)
        }, 500);
    })

    return(
        <div style={{ 
                     margin: `1rem ${window.innerWidth/12}px 0`, 
                     width:`${window.innerWidth}`,
                     position: 'relative',
                     bottom: '0px',
                     overflow: 'hidden'
                     }}>
            {bars}
        </div>
    )
}
