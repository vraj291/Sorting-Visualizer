const Ascending_sort = (bars) => {
    let trace=[]
    trace.push([...bars])
    for(let i=1;i<bars.length;i++){
        let key = bars[i]
        let j=i-1
        while(j>=0 && bars[j]>key){
            trace.push({swap:false, x: j,y: i})
            bars[j+1] = bars[j]
            j--
            trace.push([...bars])
        }
        bars[j+1] = key
        trace.push([...bars])
    }
    return trace
}

const Descending_sort = (bars) => {
    let trace=[]
    trace.push([...bars])
    for(let i=1;i<bars.length;i++){
        let key = bars[i]
        let j=i-1
        while(j>=0 && bars[j]<key){
            trace.push({swap:false, x: j,y: i})
            bars[j+1] = bars[j]
            j--
            trace.push([...bars])
        }
        bars[j+1] = key
        trace.push([...bars])
    }
    return trace
}

export const insertion_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
        Descending_sort(bars) 
}
