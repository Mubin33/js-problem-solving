arr = [1, 2, 1];

// const arrayReplace = (inArr, selectNum, ReplaceNum) => {
//     inArr.forEach((element, index) => {
//         // console.log(element)
//         if (element === selectNum) {
//             inArr[index] = ReplaceNum
//         }
//     });
//     console.log(inArr)
// }

const arrayReplace = (arr, selectNumber, ReplaceNum) => {
  let find = arr.filter((e) => e === selectNumber);
  if (find.length === 0)
    console.log("sorry selected number is not present in array");
  arr.forEach((element, index) => {
    if (element === selectNumber) {
      arr[index] = ReplaceNum;
    }
  });
  return arr;
}; 
console.log(arrayReplace(arr, 3, 4));
