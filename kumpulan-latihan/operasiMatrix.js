/*
Diberikan sebuah function operasiMatriks yang menerima parameter dua buah array
dua dimensi dan operator matematika.
Dimana jika parameter operator matematika adalah '+' maka dua array tersebut ditambahkan
dan jika parameter operator matematika adalah '-' maka dua array tersebut dikurangkan
NOTE: operator matematika yang diterima hanya '+' dan '-'
contoh :
input:
arr1:
[
[5, 4, 7],
[3, 9, 3],
[8, 3, 2]
]
arr2:
[
[5, 4, 8],
[1, 9, 3],
[8, 2, 2]
]
operator: '+'
Proses:
[
[5+5, 4+4, 7+8],
[3+1, 9+9, 3+3],
[8+8, 3+2, 2+2]
]
Output:
[ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]
NOTE:
- ASUMSI JUMLAH BARIS DAN KOLOM arr1 dan arr2 HARUS SAMA
- Jika jumlah kolom atau jumlah baris dari kedua array berbeda maka
RETURN 'Invalid array'
RULES:
- DILARANG menggunakan built-in function .map, .filter, .reduce
*/

function operasiMatriks(arr1, arr2, operator) {

  var finalProcessedArray = []

  if (arr1.length !== arr2.length) {
    return "INVALID ARRAY";
  } else {

    for (var i = 0; i < arr1.length; i++) {
      var initialProcessedArray = []
      // console.log(arr1[i].length);
      // console.log(arr2[i].length);

      if (arr1[i].length !== arr2[i].length) {
        return "Invalid Array";
      } else if (operator === "+") {
        for (var j = 0; j < arr1[i].length; j++) {
          var processedIndex = [];
          var processedIndex = arr1[i][j] + arr2[i][j];
          initialProcessedArray.push(processedIndex);
          // console.log(initialProcessedArray);
        }
        finalProcessedArray.push(initialProcessedArray)
      } else {
        for (var k = 0; k < arr1[i].length; k++) {
          var processedIndex = [];
          var processedIndex = arr1[i][k] - arr2[i][k];
          initialProcessedArray.push(processedIndex);
          // console.log(initialProcessedArray);
        }
        finalProcessedArray.push(initialProcessedArray)
      }

    }
  }

  return finalProcessedArray;
}

console.log(operasiMatriks([
  [5, 4, 7],
  [3, 9, 3],
  [8, 3, 2],
  [6, 7, 8]
], [
  [5, 4, 8],
  [1, 9, 3],
  [8, 2, 2],
  [3, 3, 5]
], "-")); // [ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]

// console.log(operasiMatriks([
//   [5, 4, 7],
//   [3, 9, 3],
//   [8, 3, 2]
// ], [
//   [5, 4, 8],
//   [1, 9, 3],
//   [8, 2, 2],
//   [1, 2, 3]
// ], "+")); // INVALID ARRAY