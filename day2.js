sum = 0

// const summAll = (...params) => {
//     params.forEach(element => {
//         sum += element
//     });
//     console.log(sum)
// }




const summAll=(...params)=>{
    console.log(params)
    let sum =0
    params.forEach(element => {
        sum += element
    });
    console.log(sum)
}

 

summAll(1,1, 2, 3, 4, 5,10)