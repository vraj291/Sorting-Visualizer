const Ascending_sort = (bars) => {
    let trace=[]
    trace.push([...bars])
    for(let i=1;i<bars.length;i++){
        for(let j=0;j<bars.length-i;j++){
            trace.push({swap:false, x: j+1,y: j})
            if(bars[j+1] < bars[j]){
                let temp=bars[j]
                bars[j]=bars[j+1]
                bars[j+1]=temp
                trace.push({swap:true, x: j+1, y: j})
                trace.push([...bars])
            }
        }
    }
    return trace
}

const Descending_sort = (bars) => {
    let trace=[]
    trace.push([...bars])
    for(let i=1;i<bars.length;i++){
        for(let j=0;j<bars.length-i;j++){
            trace.push({swap:false, x: j+1,y: j})
            if(bars[j+1] > bars[j]){
                let temp=bars[j]
                bars[j]=bars[j+1]
                bars[j+1]=temp
                trace.push({swap:true, x: j+1, y: j})
                trace.push([...bars])
            }
        }
    }
    return trace
}

export const bubble_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
        Descending_sort(bars) 
}
