/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/


/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/


/**
//algoritma 

1. Membuat nested fuction balikArr yang akan menerima 1 parameter kata (string) yang didapat dari array
  1.a. buat variable penampung tampungKata
  1.b. looping sebanyak jumlah karakter dalam kata dimulai dari akhir
  1.c. tambahkan tampungKata dengan karakter yg didapat dr looping
  1.d. return tampungKata
2. Membuat looping yang akan mengecek isi array dari kiri ke kanan
  2.a. jika iterasi genap
      2.a.a panggil fungsi balikArr dengan parameter isi dari array dan tukar isi array dengan return fungsi balikArr
3. return array

*/

//-------------------------------------------------------------------------------------------------

function reverseEven (arr) {
  
}
console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]  
console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]
console.log(reverseEven([]));
// []


//-------------------------------------------------------------------------------------------------

function printBranch(branches) {
    var month = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec']
    // | jan | Branch-1 IN: 1000 | OUT:500 |Branch-2 IN: 1000 | OUT:700 |Branch-3 IN: 2000 | OUT:500 |
  }
  
  //TEST CASE 1
  var data1 = [
    [
      [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
      [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
    ],
    [
      [1000, 2500, 2000, 2000, 1500, 2000, 1000, 1000, 2000, 2500, 2000, 3000], //Income
      [700, 1000, 700, 1000, 700, 1000, 500, 500, 500, 1000, 1200, 1700] //Outcome
    ],
    [
      [2000, 1500, 1000, 1000, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
      [500, 600, 500, 700, 1000, 1000, 1000, 1500, 1000, 1500, 1000, 2200] //Outcome
    ]
  ]
  
  console.log(printBranch(data1));
  
//-------------------------------------------------------------------------------------------------

/*
  ================
  ARR SLICE
  ================
  description: Arr slice adalah sebuah function untuk memotong nilai array yang sudah ditentukan batas indexnya
               sama seperti kita menggunakan arr.slice(). Function akan mengembalikan nilai berupa array
               yang valuenya sudah dipotong  range mulai dari nilai min sampai nilai max ( PAHAMI CARA KERJA ARR SLICE)
  
  rules:
  1. tidak boleh menggunakan built in function ARR.SLICE() dan ARR.SPLICE()
  2. Function menerima parameter berupa array data, batas minimum, dan batas maksimum
  3. Asumsi parameter min dan max selalu memiliki nilai dan type datanya number
  4. Cara kerja function sama seperti cara kerja arr.slice()
  examples:
  1. INPUT = [1, 2, 3, 4, 5] dan nilai min = 2, nilai max = 4
     OUTPUT = [3, 4]
*/

function arrSlice ( arr, min, max ) {
    // Your code here
  
  }
  
  console.log(arrSlice([7, 4, 3, 2, 1, 2, 1], 4, 7)) // [ 1, 2, 1 ]
  console.log(arrSlice([1, 4, 0, 4, 5], 1, 3)) // [ 4, 0 ]
  console.log(arrSlice([1, 2, 3, 4, 5], 0, 1)) // [ 1 ]
  console.log(arrSlice([5, 4, 3, 2, 1], 0, 2)) // [ 5, 4 ]
  console.log(arrSlice([1, 2, 3, 4, 5], 2, 4)) // [ 3, 4]

//-------------------------------------------------------------------------------------------------

/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
    // Code here
   
  }
  
  // TEST CASES
  console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
  console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
  console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
  console.log(fishFilter(['gurita', 'udang'])); // tidak ada data

//-------------------------------------------------------------------------------------------------

// ⚓️ [Exercises 14] Mengelompokkan Angka---------------------------------------------
function mengelompokkanAngka(arr) {
    
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//-------------------------------------------------------------------------------------------------

// ⚓️ [Exercises 15] Mengelompokkan Hewan---------------------------------------------


//coba pake var alpabet =a sd z untuk sorting

function groupAnimals(animals) {
    
  }
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))

//-------------------------------------------------------------------------------------------------

function angkaPrima(angka) {

  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(17));

//-------------------------------------------------------------------------------------------------

/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================
[INSTRUKSI]
Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!
Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.
Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)
NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!
RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
*/

function invokeSpell (input) {
    const spells = [
        { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
        { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
        { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
        { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
        { q: 1, w: 2, e: 0, spellName: 'Tornado' },
        { q: 0, w: 3, e: 0, spellName: 'EMP' },
        { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
        { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
        { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
        { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
    ];
  
    
  }
  
  console.log(invokeSpell('qwe')); // Deafening Blast
  console.log(invokeSpell('ewq')); // Deafening Blast
  console.log(invokeSpell('qqq')); // Cold Snap
  console.log(invokeSpell('wwq')); // Tornado
  console.log(invokeSpell('wwe')); // Alacrity
  console.log(invokeSpell('wew')); // Alacrity
  console.log(invokeSpell('wqa')); // Combination does not exist

//-------------------------------------------------------------------------------------------------

