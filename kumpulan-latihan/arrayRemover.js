/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.
Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus
Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2
Output:
  [ 666, 10, 5, 6 ]
RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

/* PSEUDOCODE
array = [ 1, 2, 3]
index = 0
count = 2
processedArray = []
WHILE count > 0
  array[index] = ""
  index = index + 1
  count = count - 1
ENDWHILE
FOR i = 0, i < array.length
  inspector = array[i]
    IF typeof inspector === "number" THEN processedArray.push(inspector)
  i = i + 1
ENDFOR
return processedArray
*/

function arrayRemover(array, index, count) {

  var processedArray = [];

  while (count > 0) {
    array[index] = "";
    index++;
    count--
    console.log(array);
  }

  for (var i = 0; i < array.length; i++) {
    var inspector = array[i]
    if (typeof inspector === "number") {
      processedArray.push(inspector)
    }
  }

  return (processedArray);

}




console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // []