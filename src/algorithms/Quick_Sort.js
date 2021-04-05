const Ascending_sort = (bars,low,high,trace) => {

    const partition = (low,high) => {
        let pivot = bars[high]
        let i = low
        for(let j=low;j<high;j++){
            trace.push({swap:false, x: i,y: j})
            if(bars[j] < pivot){
                let temp = bars[i]
                bars[i] = bars[j]
                bars[j] = temp
                trace.push({swap:true, x: i,y: j})
                trace.push([...bars])
                i++
            }
        }
        trace.push({swap:false, x: high,y: i})
        let temp = bars[i]
        bars[i] = bars[high]
        bars[high] = temp
        trace.push({swap:true, x: i,y: high})
        trace.push([...bars])
        return i
    }

    if(low<high){
    let i = partition(low,high)
    Ascending_sort(bars,low,i-1,trace)
    Ascending_sort(bars,i+1,high,trace)
    }
}

const Descending_sort = (bars,low,high,trace) => {

    const partition = (low,high) => {
        let pivot = bars[high]
        let i = low
        for(let j=low;j<high;j++){
            trace.push({swap:false, x: i,y: j})
            if(bars[j] > pivot){
                let temp = bars[i]
                bars[i] = bars[j]
                bars[j] = temp
                trace.push({swap:true, x: i,y: j})
                trace.push([...bars])
                i++
            }
        }
        trace.push({swap:false, x: high,y: i})
        let temp = bars[i]
        bars[i] = bars[high]
        bars[high] = temp
        trace.push({swap:true, x: i,y: high})
        trace.push([...bars])
        return i
    }

    if(low<high){
        let i = partition(low,high)
        Descending_sort(bars,low,i-1,trace)
        Descending_sort(bars,i+1,high,trace)
    }
}

export const quick_sort = (bars,orient) => {
    let trace = []
    trace.push([...bars])
    orient=='asc'? 
        Ascending_sort(bars,0,bars.length-1,trace) : 
        Descending_sort(bars,0,bars.length-1,trace) 
    return trace
}