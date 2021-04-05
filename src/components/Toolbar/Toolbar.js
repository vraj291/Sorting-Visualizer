import React,{useState} from 'react'
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch'
import { HuePicker } from 'react-color';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles';
import {list_algos} from '../../algorithms/Algo_info'
import './Toolbar.css'

export const Toolbar = (props) => {
    
    const [oricolor,setOricolor] = useState('#FFFF00')
    const [compcolor,setCompcolor] = useState('#FF0000')
    const [swapcolor,setSwapcolor] = useState('#006400')

    const useStyles = makeStyles({
        root: props.style
    });

    const classes = useStyles();

    const Mode = function(){
        if(props.style.background == 'white')
            return false
        return true
    }()

    return(
    <Drawer classes={{paper: classes.root}}anchor='right' open={props.drawer} onClose={props.toggle} role="presentation">
        <div className='tools'> 
        <InputLabel className={classes.root}>Speed
            <Slider 
                className='slider' 
                color='secondary'
                defaultValue={props.speed} 
                onChangeCommitted={(ele,val) => props.handleSpeed(val)}
            />
        </InputLabel>
        <InputLabel className={classes.root}>Length
            <Slider 
                className='slider' 
                color='secondary'
                defaultValue={props.len} 
                onChangeCommitted={(ele,val) => props.handleLen(val)}
            />
        </InputLabel>
        <TextField
            InputProps={{className : classes.root}}
            InputLabelProps={{className : classes.root}}
            select
            label="Algorithm"
            value={props.algo}
            onChange={e => props.handleAlgo(e.target.value)}
        >
            {list_algos.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>
        <div style={{height:'.7rem'}}/>
        <TextField
            InputProps={{className : classes.root}}
            InputLabelProps={{className : classes.root}}
            select
            label="Orientation"
            value={props.orient}
            onChange={e => props.handleOrient(e.target.value)}
        >
            <MenuItem key='asc' value='asc'>
                Ascending
            </MenuItem>
            <MenuItem key='desc' value='desc'>
                Descending
            </MenuItem>
        </TextField>
        <div style={{height:'.7rem'}}/>
        <InputLabel className={classes.root}>Bars
            <div style={{height:'.7rem'}}/>
            <HuePicker 
                color={oricolor}
                onChange={(color)=>{setOricolor(color.hex)}}
                onChangeComplete={(color) => props.handleOriColor(color.hex)}
            />
        </InputLabel>
        <div style={{height:'.7rem'}}/>
        <InputLabel className={classes.root}>Comparisons
            <div style={{height:'.7rem'}}/>
            <HuePicker 
                color={compcolor}
                onChange={(color)=>{setCompcolor(color.hex)}}
                onChangeComplete={(color) => props.handleCompColor(color.hex)}
            />
        </InputLabel>
        <div style={{height:'.7rem'}}/>
        <InputLabel className={classes.root}>Swaps
            <div style={{height:'.7rem'}}/>
            <HuePicker 
                color={swapcolor}
                onChange={(color)=>{setSwapcolor(color.hex)}}
                onChangeComplete={(color) => props.handleSwapColor(color.hex)}
            />
        </InputLabel>
        <FormControlLabel
          className='label'
          control={
            <Switch
                color='secondary'
                checked={Mode}
                onChange={props.handleDarkMode}
            />}
          label="Dark Mode"
          labelPlacement="start"
        />
        </div>  
    </Drawer>
)}