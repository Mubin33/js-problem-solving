
// ekta num pass kora hobe and oi number er moddhe 1 bad e joto prime number thakbe sob gulor sum ber korte hobe.

let sum = 0
// const SumPrime = (num) => {
//     for (let i = 2; i <= num; i++) { //1st loop e number gulo alada vabe nicche 
//         let isPrime = true
//         for (let j = 2; j < i; j++) { //2nd loop e number gulo check korche je ager loop er number gulo boro kina
//             if (i % j === 0) { // eikhane check kortase je ektake opor number diye vag korle 0 hoy kina 0 hole eita prime na
//                 isPrime = false
//                 break
//             }
//         }
//         if (isPrime) {
//             sum += i
//             console.log(i)
//         }
//     }
//     return sum
// }








const SumPrime=(num)=>{
    for (let i = 2; i<= num; i++){
        let isPrime = true
        for(let j=2 ; j<i; j++){
            if(i%j ===0 ){
                isPrime = false
                break
            }
        }
        if(isPrime){
            console.log(i)
            sum += i
        }
    }
    return sum
}


console.log(SumPrime(100))