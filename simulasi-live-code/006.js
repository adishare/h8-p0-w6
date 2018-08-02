function angkaTerbesar(sentence) {
  if(sentence.length == 0) return -1
  if(sentence.length == 1) return sentence[0]
  
  function highest(a,b){
    if(a>b)return a 
    else return b
  }
  
  sentence.splice(0,2, highest(sentence[0],sentence[1]))
  return angkaTerbesar(sentence)
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1