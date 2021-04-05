import {list_algos} from './Algo_info'

export const generate_arr = (num) => {
    let temp=[]
    for(let i=0;i<num;i++){
        temp.push(Math.floor(Math.random()*98)+1)
    }
    return temp
}

export const compColors = async (x,y,handleChange,s) => {
    handleChange(x,y,'red')
    await new Promise((resolve) => 
        setTimeout(resolve,s)
    )
    handleChange(x,y,'yellow')
}

export const getTrace = (arr,algo,orient) => {
    let temp = list_algos.find(al => al.value == algo)
    return temp.func([...arr],orient)
}