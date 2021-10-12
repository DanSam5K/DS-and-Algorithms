const palindrome = (str) => {
    //write code here
    let convertedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let newWord = convertedStr.split('').reverse().join('');
    if(newWord === convertedStr){
        return true
    } else return false;
}




// function palindrome(str) {
//     // write your code here
//     let convertedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
//     let newWord = convertedStr.split('').reverse().join('');
//     if(newWord === convertedStr){
//       return true
//     } else return false;
//   }