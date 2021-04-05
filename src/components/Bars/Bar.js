import React from 'react'

export const Bar = (props) => {
    return (
        <div style={{
            position: 'relative',
            display:'inline-block',
            margin: `${props.width/3}px`,
            textAlign: 'center',
            backgroundColor: `${props.color}`,
            width: `${props.width}px`,
            height: `${props.value*4}px`,
            cursor: 'pointer',
            transition:`height ${props.speed/5}s ease-in-out` 
        }}>
            {/*<p style={{position:'absolute',marginLeft:'auto',bottom:'0'}}>{props.value}</p>*/}
        </div>
    )
}