const noneRepete=(str)=>{
    let obj = {}
    for(let i of str){
        if(i in obj){
            obj[i] += 1
        }else{
            obj[i] = 1
        }
    }
    for(let key in obj){
        if(obj[key] !==1){
            console.log(key)
        }
    }
    console.log(obj)
}

noneRepete('hello')
noneRepete([1,2,3,4,5,1,4])