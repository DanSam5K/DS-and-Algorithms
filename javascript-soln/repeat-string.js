function repeatStringNumTimes (str, num) {
  // write your code here
  let strRepeated = "";
  while(num > 0){
    strRepeated += str;
    num--;
  } 
  return strRepeated;
}
