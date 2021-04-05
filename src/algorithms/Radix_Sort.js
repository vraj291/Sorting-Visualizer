const Ascending_sort = (bars) => {
    let trace = []
    trace.push([...bars])

    const count_sort = (exp) => {
        let count=[]
        let temp = [...bars]
        let i
        for(i=0;i<10;i++){
            count.push(0)
        }
        for(i=0;i<bars.length;i++){
            count[Math.floor(bars[i]/exp)%10]++
        }
        for(i=1;i<10;i++){
            count[i]=count[i]+count[i-1]
        }
        for(i=bars.length-1;i>=0;i--){
            let index = (count[Math.floor(temp[i]/exp)%10]--)-1
            trace.push({swap:false, x: index,y: i})
            bars[index] = temp[i]
            trace.push({swap:true, x: index,y: i})
            trace.push([...bars])
        }
    }
    
    for(let j=0;j<2;j++){
        count_sort(Math.pow(10,j))
    }
    return trace
}

const Descending_sort = (bars) => {
    let trace = []
    trace.push([...bars])

    const count_sort = (exp) => {
        let count=[]
        let temp = [...bars]
        let i
        for(i=0;i<10;i++){
            count.push(0)
        }
        for(i=0;i<bars.length;i++){
            count[Math.floor(bars[i]/exp)%10]++
        }
        for(i=1;i<10;i++){
            count[i]=count[i]+count[i-1]
        }
        for(i=0;i<bars.length;i++){
            let index = (count[Math.floor(temp[i]/exp)%10]--)-1
            trace.push({swap:false, x: bars.length-1-index,y: i})
            bars[bars.length-1-index] = temp[i]
            trace.push({swap:true, x: bars.length-1-index,y: i})
            trace.push([...bars])
        }
    }
    
    for(let j=0;j<2;j++){
        count_sort(Math.pow(10,j))
    }

    return trace
}

export const radix_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
        Descending_sort(bars) 
}