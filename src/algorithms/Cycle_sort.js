const Ascending_sort = (bars) => {
    let item,pos,item_in
    let trace = []
    trace.push([...bars])
    let n = bars.length

    for(let start=0;start<n-1;start++){
        item = bars[start]
        item_in = start
        pos = start

        for(let i=start+1;i<n;i++){
            trace.push({swap:false, x: start,y: i}) 
            if (bars[i] < item)
                pos++
        }

        if( pos == start)
            continue
        while(item == bars[pos])
            pos++
        
        if(pos != start){
            let temp = bars[pos]
            bars[pos] = item
            item = temp
            trace.push({swap:true, x: item_in,y: pos})
            item_in = pos 
            trace.push([...bars])
        }

        while( pos != start){

            pos = start

            for(let i=start+1;i<n;i++){
                trace.push({swap:false, x: start,y: i}) 
                if (bars[i] < item)
                    pos++
            }

            while(item == bars[pos])
                pos++
            
            if(item != bars[pos]){
                let temp = bars[pos]
                bars[pos] = item
                item = temp
                trace.push({swap:true, x: item_in,y: pos})
                item_in = pos 
                trace.push([...bars])
            }
        }        
    }   

    return trace
}

const Descending_sort = (bars) => {
    let item,pos,item_in
    let trace = []
    trace.push([...bars])
    let n = bars.length

    for(let start=0;start<n-1;start++){
        item = bars[start]
        item_in = start
        pos = start

        for(let i=start+1;i<n;i++){
            trace.push({swap:false, x: start,y: i})  
            if (bars[i] > item)
                pos++
        }

        if( pos == start)
            continue
        while(item == bars[pos])
            pos++
        
        if(pos != start){
            let temp = bars[pos]
            bars[pos] = item
            item = temp
            trace.push({swap:true, x: item_in,y: pos})
            item_in = pos 
            trace.push([...bars])
        }

        while( pos != start){

            pos = start

            for(let i=start+1;i<n;i++){
                trace.push({swap:false, x: start,y: i}) 
                if (bars[i] > item)
                    pos++
            }

            while(item == bars[pos])
                pos++
            
            if(item != bars[pos]){
                let temp = bars[pos]
                bars[pos] = item
                item = temp
                trace.push({swap:true, x: item_in,y: pos})
                item_in = pos 
                trace.push([...bars])
            }
        }        
    }
    
    return trace
}

export const cycle_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
        Descending_sort(bars) 
}