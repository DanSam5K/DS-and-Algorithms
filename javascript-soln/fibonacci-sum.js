const sumFibs = (sum) => {
    // write your code here
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;
    let sumOdd = 0;
    for(let i = 0; i <= num; i++){
      nextNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = nextNum;
      if(nextNum%2 !== 0 && nextNum <= num){
          sumOdd = nextNum +sumOdd
      }
    }
    return sumOdd + 1
}


function sumFibs(num) {
    // write your code here
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;
    let sumOdd = 0;
    for(let i = 0; i <= num; i++){
      nextNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = nextNum;
      if(nextNum%2 !== 0 && nextNum <= num){
        sumOdd = nextNum + sumOdd
      }
    } 
    return sumOdd + 1
  }
  