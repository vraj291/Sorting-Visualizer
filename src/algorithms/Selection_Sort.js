const Ascending_sort = (bars)=>{
    let trace=[]
    trace.push([...bars])
    let min_in=0
    for(let i=0 ;i<bars.length;i++){
        min_in=i
        for(let j=i+1;j<bars.length;j++){
            trace.push({swap:false, x: min_in,y: j})
            if(bars[min_in] > bars[j])
                min_in=j
        }
        let temp=bars[i]
        bars[i]=bars[min_in]
        bars[min_in]=temp
        trace.push({swap:true, x: min_in, y: i})
        trace.push([...bars])
    }
    return trace
}

const Descending_sort = (bars) => {
    let max_in=0
    let trace=[]
    trace.push([...bars])
    for(let i=0 ;i<bars.length-1;i++){
        max_in=i
        for(let j=i+1;j<bars.length;j++){
            trace.push({swap:false,x: max_in,y: j})
            if(bars[max_in] < bars[j])
                max_in=j
        }
        let temp=bars[i]
        bars[i]=bars[max_in]
        bars[max_in]=temp
        trace.push({swap:true, x: max_in, y: i})
        trace.push([...bars])
    }
    return trace
}

export const select_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
        Descending_sort(bars) 
}



