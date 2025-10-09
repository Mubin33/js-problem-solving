
// ekta array pass korbe jekhane kisu integer thakbe , sei integer gulo check kora hobe je secuence onu jai ase kina. jodi thake tahole true dibe r jodi na thake tahole false dibe.   
array = [3, 4]
array1 = [1, 3, 2, 3, 4]
array2 = [1, 3, 2]

// const secuence = (arr) => {
//     for (let i = 1; i < arr.length; i++) { // arr take for loop er shahajje lelement gulo nicche array er length porjonto
//         if (arr[i] < arr[i - 1]) { // eikhane check kortase je bortoman i er value ta ki ager i er value theke choto kina. 
//             return false
//         }
//     }
//     return true
// }




const secuence=(arr)=>{ 
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false
        }
    }
    return true
}



 


console.log(secuence(array))
console.log(secuence(array1))
console.log(secuence(array2))