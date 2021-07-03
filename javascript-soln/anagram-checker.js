//solution 1
function anagram(str1, str2) {
    // write your code here
    let convert1 = str1.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let convert2 = str2.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    let sorted1 = convert1.split('').sort().join();
    let sorted2 = convert2.split('').sort().join();
    if(sorted1 === sorted2){
      return true
    } else return false
  }

  //solution 2
  //helper function
  let buildCharObject = function(str) {
      const charObj = {};
      let converted = str.replace(/[^\w]/g).toLowerCase();
      for(let i of converted) {
        charObj[i] += 1 || 1
      }
      return charObj
    }
    
    // main function
    const anagram = (strA, strB) => {
      const objA = buildCharObject(strA)
      const objB = buildCharObject(strB)
      if(Object.keys(objA).length !== Object.keys(objB).length) {
        return false
      }
      for(let i in objA) {
        if(objA[i] !== objB[i]) {
          return false
        }
      }
      return true
    }