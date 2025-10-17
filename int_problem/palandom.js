const isPalandom = (str)=>{
    const reverceStr = str.split('').reverse().join('')
    if(reverceStr === str){
        return true
    }
    else{
        return false
    }
}

console.log(isPalandom('mubin'))
console.log(isPalandom('level'))