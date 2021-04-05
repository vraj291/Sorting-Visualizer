const Ascending_sort = (bars,l,r,trace) => {

    const merge = (l,m,r) => {
        let left =[],right=[]
        let i=0,j=0,k=l
        for(i=l;i<m+1;i++)
            left.push(bars[i])
        for(i=m+1;i<=r;i++)
            right.push(bars[i]) 
        i=j=0     
        while(i<left.length && j<right.length){
           trace.push({swap:false, x: k+i,y: k+j})
           if(left[i] < right[j]){
                bars[k] = left[i]
                i++
           }else{
                bars[k] = right[j]
                j++
           }
           trace.push([...bars])
           k++
        }
        while (i<left.length) {
            bars[k] = left[i]
            i++
            k++
            trace.push([...bars])
        }
        while (j<right.length) {
            bars[k] = right[j]
            j++
            k++
            trace.push([...bars])
        }
        return 
    }
    
    let m = Math.floor((l+r)/2)

    if (r > l){
        Ascending_sort(bars,l,m,trace)
        Ascending_sort(bars,m+1,r,trace)
        merge(l,m,r)
    }
}

const Descending_sort = (bars,l,r,trace) => {

    const merge = (l,m,r) => {
        let left =[],right=[]
        let i=0,j=0,k=l
        for(i=l;i<m+1;i++)
            left.push(bars[i])
        for(i=m+1;i<=r;i++)
            right.push(bars[i]) 
        i=j=0     
        while(i<left.length && j<right.length){
           trace.push({swap:false, x: k+i,y: k+j})
           if(left[i] > right[j]){
                bars[k] = left[i]
                i++
           }else{
                bars[k] = right[j]
                j++
           }
           trace.push([...bars])
           k++
        }
        while (i<left.length) {
            bars[k] = left[i]
            i++
            k++
            trace.push([...bars])
        }
        while (j<right.length) {
            bars[k] = right[j]
            j++
            k++
            trace.push([...bars])
        }
        return 
    }
    
    let m = Math.floor((l+r)/2)

    if (r > l){
        Descending_sort(bars,l,m,trace)
        Descending_sort(bars,m+1,r,trace)
        merge(l,m,r)
    }
}

export const merge_sort = (bars,orient) => {
    let trace = []
    trace.push([...bars])
    orient=='asc'? 
        Ascending_sort(bars,0,bars.length-1,trace) : 
        Descending_sort(bars,0,bars.length-1,trace) 
    return trace
}
