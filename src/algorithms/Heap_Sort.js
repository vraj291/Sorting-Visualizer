const Ascending_sort = (bars) => {
    
    let trace = []
    trace.push([...bars])
    let new_bars=[]
    let n = bars.length

    const heapify = (i,len) => {
        let min = i
        let left = 2*i + 1
        let right = 2*i + 2
        trace.push({swap:false, x: min,y: left})
        if (left < len && bars[left] <= bars[min]){
            min = left
        }
        trace.push({swap:false, x: min,y: right})
        if (right < len && bars[right] <= bars[min]){
            min = right
        }
        
        if(min === i)
            return
        else{
            let temp = bars[i]
            bars[i] = bars[min]
            bars[min] = temp
            trace.push({swap:true, x: min,y: i})
            trace.push([...new_bars,...bars])
            heapify(min,len)
        }
    }

    for(let i = Math.floor(n/2) - 1 ; i>=0 ; i--){
        heapify(i,n)
    }

    for(let i=0;i<n;i++){
        new_bars.push(bars[0])
        bars[0] = bars[bars.length-1]
        bars.splice(bars.length-1,1)
        heapify(0,bars.length)
        trace.push([...new_bars,...bars])
    }

    return trace
}

const Descending_sort = (bars) => {
    
    let trace = []
    trace.push([...bars])
    let new_bars=[]
    let n = bars.length

    const heapify = (i,len) => {
        let max = i
        let left = 2*i + 1
        let right = 2*i + 2

        trace.push({swap:false, x: max,y: left})
        
        if (left < len && bars[left] > bars[max]){
            max = left
        }
        
        trace.push({swap:false, x: max,y: right})
        
        if (right < len && bars[right] > bars[max]){
            max = right
        }
        
        if(max === i)
            return
        else{
            let temp = bars[i]
            bars[i] = bars[max]
            bars[max] = temp
            trace.push({swap:true, x: max,y: i})
            trace.push([...new_bars,...bars])
            heapify(max,len)
        }
    }

    for(let i = Math.floor(n/2) - 1 ; i>=0 ; i--){
        heapify(i,n)
    }

    for(let i=0;i<n;i++){
        new_bars.push(bars[0])
        bars[0] = bars[bars.length-1]
        bars.splice(bars.length-1,1)
        heapify(0,bars.length)
        trace.push([...new_bars,...bars])
    }

    return trace
}

export const heap_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
       Descending_sort(bars) 
}
