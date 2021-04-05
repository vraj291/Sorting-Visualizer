const Ascending_sort = (bars) => {
    let trace=[]
    trace.push([...bars])

    const bucket_sort = (exp) => {
        let count=[]
        let temp = [...bars]
        let i,cnt=0
        for(i=0;i<10;i++){
            count.push([])
        }
        for(i=0;i<bars.length;i++){
            count[Math.floor(bars[i]/exp)%10].push(i)
        }
        for(i=0;i<10;i++){
            for(let j = 0 ;j<count[i].length;j++){
                let index = count[i][j]
                trace.push({swap:false, x: cnt,y: index})
                trace.push({swap:true, x: cnt,y: index})
                bars[cnt++] = temp[index]
                trace.push([...bars])
            }
        }
    }
    
    for(let j=0;j<2;j++){
        bucket_sort(Math.pow(10,j))
    }

    return trace
}

const Descending_sort = (bars) => {

    let trace = []
    trace.push([...bars])

    const bucket_sort = (exp) => {
        let count=[]
        let temp = [...bars]
        let i,cnt=bars.length-1
        for(i=0;i<10;i++){
            count.push([])
        }
        for(i=0;i<bars.length;i++){
            count[Math.floor(bars[i]/exp)%10].push(i)
        }
        for(i=0;i<10;i++){
            for(let j =count[i].length-1 ;j>=0;j--){
                let index = count[i][j]
                trace.push({swap:false, x: cnt,y: index})
                trace.push({swap:true, x: cnt,y: index})
                bars[cnt--] = temp[index]
                trace.push([...bars])
            }
        }
    }
    
    for(let j=0;j<2;j++){
        bucket_sort(Math.pow(10,j))
    }

    return trace
}

export const bucket_sort = (bars,orient) => {
    return orient=='asc'? 
        Ascending_sort(bars) : 
        Descending_sort(bars) 
}