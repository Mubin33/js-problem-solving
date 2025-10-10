const pairsSum = (arr) => {
  let newA = [];
//   arr.forEach((element) => {
//     arr.forEach((e) => {
//       if (element + e === 10) {
//         // let pairs = (e, element)
//         newA.push([e, element]);
//       }
//     });
//   });




for(let i = 0; i<arr.length;i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i]+arr[j] === 10){
            newA.push([arr[i], arr[j]])
        }
    }
}
  console.log(newA);
};

pairsSum([1, 2, 4, 5, 6, 7, 8, 9, 3]);
