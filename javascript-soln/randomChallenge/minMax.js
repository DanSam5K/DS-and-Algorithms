function miniMaxSum(arr) {
  // Write your code here
  // let minNum = Math.min(...arr), maxNum = Math.max(...arr), sum = arr.reduce((a, b) => a + b, 0), minSum = sum - maxNum, maxSum = sum - minNum;
  const { minNum, maxNum, sum } = {
    minNum: Math.min(...arr),
    maxNum: Math.max(...arr),
    sum: arr.reduce((a, b) => a + b, 0),
  };
  return `${sum - maxNum} ${sum - minNum}`;
}
