/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika cdtidak tahu ini apa, belum penting untuk sekarang :) )


1. fungsi menerima parameter array of numbers
1. buat variabel min dengan isi angka pertama dari array
2. buat variabel max dengan isi angka pertama dari array
3. buat perulangan sebanyak panjang array
  3.a. jika array ke-iterasi lebih besar dari max maka resign min dengan nilai array ke-iterasi nya
  3.b. jika array ke-iterasi lebih kecil dari min maka resign min dengan nilai array ke-iterasi nya
4. buat variabel result dengan array kosong  
5. buat perulangan j mulai dari min sampai max
  5.a. buat variabel nilai dengan value false
  5.b. buat perulangan k sebanyak panjang numbers
    5.b.1. nilai j sama dengan numbers ke-k maka resign variabel nilai dengan true 
  5.c. jika variabel nilai berisi false maka push variabel result dengan nilai j
6. kembalikan/return variabel result
*/


function missingNumbers (numbers) {
  var min = numbers[0]
  var max = numbers[0]
  for(var i=0;i<numbers.length;i++){
    if(numbers[i]>max) max = numbers[i]
    if(numbers[i]<min) min = numbers[i]
  }
  
  var result = []
  for(var j=min;j<max;j++){
    var nilai = false
    for(var k=0;k<numbers.length;k++){
      if(j == numbers[k] ) nilai = true
    }
    if(nilai == false) result.push(j)
  }

  return result
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
