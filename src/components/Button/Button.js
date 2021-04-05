import React from 'react'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import './Button.css'

const theme = createMuiTheme();

theme.typography.button = {
  fontSize: '0.8rem',
  '@media (max-width:900px)': {
    fontSize: '0.7rem',
  },
};

export const Button = ({text,func,isOn}) => {
  
  const style = isOn? {pointerEvents: 'none',
                       cursor: 'not-allowed', 
                       background: 'rgb(233,30,99,0.4)'
                      }:{}

  return(
    <button
      onClick={func}
      style={style}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="button">{text}</Typography>
      </ThemeProvider>
    </button>
)}
  