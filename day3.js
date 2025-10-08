
// kono ekta array pass kora hole sei array te thaka element gulor dui pashe wall dite hobe star diye, indivitual elementer dui pashe 1 ta kore star and full array er first and last e 5 ta kore star(*) output dite hobe

picture = ['abcs', 'ded', 'null', 90]

// function addBorder(arr) {
//     let wall = '*'.repeat(arr[0].length + 2) //repet: string take koyekbar repete korte hobe ta set kore dewa
//     arr.unshift(wall) // unshift: kono array er first e kono kisu jog ba add kora(wall jog korse)
//     arr.push(wall) // push: kono array er last e kono kisu jog ba add kora(wall jog korse)
//     for (let i = 1; i < arr.length - 1; i++) {
//         arr[i] = '*'.concat(arr[i], '*') // concat: ekba ekadhik str ba value add kora 
//     }
//     return arr
// }


// const addBorder=(arr)=>{
//     let wall = "*".repeat(3)
//     arr.unshift(wall)
//     arr.push(wall)

//     for(let i = 1; i<arr.length-1; i++){
//         arr[i] = '*'.concat(arr[i], '*')
//     }
//     return arr
// }





const addBorder=(arr)=>{
    let wall = '*'.repeat(arr[0].length)
    arr.unshift(wall)
    arr.push(wall)
    for(let i = 1; i<arr.length - 1; i++){
        arr[i] = '*'.concat(arr[i], '*')
    }

    return arr
}




console.log(addBorder(picture))  