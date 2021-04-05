import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { DoubleArrow,Refresh, PauseCircleFilledOutlined, PlayCircleFilledOutlined, SkipNext, SkipPrevious, FormatColorResetSharp } from '@material-ui/icons';
import './PlayControls.css'

export const PlayControls = (props) =>{
    let play_but = <PlayCircleFilledOutlined fontSize="large"/>
    let pause_but = <PauseCircleFilledOutlined fontSize="large"/>

    const handleIcon = () => {
        if(props.isOn){
            props.pause()
        }else{
            props.play()
        }
    }

    return(
        <div className="play-con">
            <IconButton onClick={props.clear}>
                <Refresh fontSize="large"/>
            </IconButton>
            <IconButton onClick={props.backward}>
                <SkipPrevious fontSize="large"/>
            </IconButton>
            <IconButton onClick={handleIcon}>
               {props.isOn? pause_but:play_but}
            </IconButton>
            <IconButton onClick={props.forward}> 
                <SkipNext fontSize="large"/>
            </IconButton>
            <IconButton onClick={props.skip}>
                <DoubleArrow fontSize="large"/>
            </IconButton>
        </div>
    )
}