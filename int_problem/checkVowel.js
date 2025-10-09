// const checkVowel = (str) => {
//   let vowel = 0;
//   for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       vowel += 1;
//     }
//   }
//   console.log(vowel);
// };



const checkVowel=(str)=>{
  let vowel = 0
  for(let i = 0; i<str.length; i++){
    if('aeiou'.includes(str[i])){
      vowel += 1 
    }
  }
  console.log(vowel)
}



checkVowel("hello");
