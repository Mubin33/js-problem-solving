let str1 = 'mbn'
let str2 = 'ui'
let str3 = ''

const margeStr=()=>{
    for(let i=0; i<str1.length+str2.length; i++){
        if(i<str1.length){
            str3 = str3+str1[i]
        }
        if(i<str2.length){
            str3 = str3+str2[i]
        }
    }
}
margeStr()
console.log(str3)