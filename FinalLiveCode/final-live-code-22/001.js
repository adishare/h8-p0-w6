/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

/*
1. ubah tipe data number menjadi string kemudian split per karakter
2. buat perulangan i mulai dari karakter ke 3 terakhir number dengan decrement 3 per iterasi 
    2.b. tambahkan number ke iterasi dengan '.'
3. kembalikan/return 'Rp' + gabungan number + ',00'
*/

function formatUang(number) {
  number = String(number).split('')
  for(var i=number.length-4;i>=0;i-=3){
      number[i]+='.'
  }
  
  return 'Rp'+number.join('')+',00'
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
