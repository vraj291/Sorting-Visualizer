import React,{useState} from 'react'
import {Footer} from './components/Footer/Footer'
import {SortChart} from'./components/SortChart/SortChart'
import './App.css'

export const App = () => {

    const [style,setStyle] = useState({
        background: '#363537',
        color: '#FAFAFA',
        //transition: 'all 0.2s ease-in-out'
    })

    const handleDarkMode = () => {
        if(style.background == 'white'){
            setStyle({
                background: '#363537',
                color: '#FAFAFA',
                //transition: 'all 0.2s ease-in-out'
            })
        }else{
            setStyle({
                background: 'white',
                color: 'black', 
                //transition: 'all 0.2s ease-in-out'
            })
        }
    }

    return(
        <div>
            <SortChart
                style={style}
                handleDarkMode={handleDarkMode}
            />
            <Footer
                style={style}
            />
        </div>
    )
}


  