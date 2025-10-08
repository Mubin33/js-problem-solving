const findMax=(arr)=>{
    let maxNum = arr[0]
    arr.forEach(element => { 
        if(element > maxNum){
            maxNum = element
        } 
    });
    console.log(maxNum)
}


findMax([1,2,36,5,4,7])