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
    
    var result = []
    var count = size*size
    for(var i=1; i<=count; i++){
        var tampung= []
        for(var j=0;j<=size;j++){
            // if(j%2===0) tampung.push('o')
            // else tampung.push('x')
            tampung.push(count)
            count--
        }
        result.push(tampung)
    }
    return result
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
  