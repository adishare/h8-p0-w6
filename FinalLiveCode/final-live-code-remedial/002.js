/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/

function multiDimensionalXO (size) {
  if (size < 1) return 'Invalid input'
  
  var arrResults = []
  for(var i = 0; i <= size - 1; i++) {
    arrResults[i] = new Array()
  }

  var position = 0
  var totalIsi =  size * size

  for (var j = 1; j <= totalIsi; j++) {
    if (arrResults[position].length > size - 1) {
      position++
      if (j % 2 !== 0)  arrResults[position].push('x')
      else arrResults[position].push('o')
      
    } else if (arrResults[position].length <= size - 1) {
      if (j % 2 !== 0) arrResults[position].push('x')
      else if (j % 2 === 0) arrResults[position].push('o')
    }
  }
  return arrResults
}

console.log(multiDimensionalXO(3));
// [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]

console.log(multiDimensionalXO(5));
/*
[ [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(0));
// Invalid input
