// const evenNum=(arr)=>{
//     let even = []
//     let sumEven = 0
//     arr.forEach(element => {
//         // console.log(element)
//         if(element %2 ===0){
//             even.push(element)
//             sumEven += element
//         } 
//     });
//     console.log(even)
//     console.log(sumEven)
// }










const evenNum=(arr)=>{
    let even = [] 
    arr.forEach(element => {
        if(element % 2 == 0){
            console.log(element)
            even.push(element)
        } 
    });
    console.log(even)
}


evenNum([1,2,3,4,5,7,9, 50, 60,7])