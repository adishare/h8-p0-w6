/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:

7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Buatlah sebuah pseudocode untuk membuat program bilangan prima!
note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):

STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
    

*/
/*
1. Membuat variable baru (output) dengan nilai tampung array terlebih dahulu dengan tujuan untuk mengambil nilai hasil array.
2. Membuat looping dengan menggunakan for, dimulai dari index sama dengan satu, batas index kurang dari dan sama dengan parameter angka yang di inputkan dan penambahan index tersebut sama dengan satu.
  2a. Menggunakan kondisi if dengan parameter angka tersebut modus penjumlahan index terebut sama dengan satu dan hasilnya sama dengan nol 
  2b. Setelah melakukan kondisi, tampungkan hasilnya (push) dengan paramater index dan penjumlahan satu kemudian tutup looping tersebut
3. Bandingkan nilai hasil array tersebut dengan parameter angka yang di inputkan dengan melakukan convert parameter angka tersebut ke dalam integer, jika nilai array tampung tersebut lebih dari satu nilai array maka tampilkan false dan selain itu maka tampilkan true
*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 16 LC-001 Psedecode');    

function angkaPrima(angka) {
  // you can only write your code here!
  var simpan = [];
  for (var i = 1; i <= angka; i++) {
    if (angka % [i + 1] === 0) {
      simpan.push(i + 1);
    }
  }
  //console.log(simpan);
  return parseInt(simpan) === parseInt(angka);
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(101)); // false

/*
------------
LOST NUMBERS
------------

PROBLEM
=======
lostNumbers adalah sebuah function yang akan menerima tiga parameter.
Tiga parameter tersebut adalah tiga angka yang berbeda.
Function akan menampilkan di log setiap angka diantara angka terkecil dan angka terbesar dari antara ketiga angka tersebut.
Hindari menampilkan angka yang merupakan salah satu dari tiga angka parameter tersebut.

Contoh:

first = 6, second = 1, third = 3
berarti, function akan menampilkan di console 1 per 1 angka:
2
4
5

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan Math.max, Math.min, .apply, .bind, .call
- Dilarang menggunakan spread operator (abaikan jika tidak tahu ini apa, belum penting untuk sekarang :))
- Dilarang menggunakan regex metode apapun
*/
/*
1. Membuat nilai tampung array baru terlebih dahulu dengan menggabungkan semua paramater tersebut.
2.Membuat variable baru (code) dengan sama dengan nol dengan tujuan menampung dan mengganti ketika ke dua nilai tersubut dalam perbandingan
3. Membuat fungsi bubble sort dalam variable nilai tampung array tersebut dengan tujuan membuat sort number dalam ketiga parameter.
  3a. Membuat dua looping dengan tujuan membandingkan satu nilai array dengan nilai array lainnya.
  3b. Looping pertama dimulai dari index nol, batas kurang dari panjang nilai tampung dan penambahan satu 
  3c. Looping ke dua dimulai dari index nol, batas kurang dari panjang nilai tampung kurangin index di looping pertama dan satu dan penambahan satu
  3d. Membuat kondisi if untuk looping ke dua, dengan nilai array index tampung tersebut lebih besar dari nilai array index tampung kemudian ditambah satu
  3e. Menjadikan variable baru (code) sama dengan nol menjadi nilai array terbesar setelah melakukan proses perbandingan terlebih dahulu.
  3f. Menjadikan nilai array terbesar tersebut menjadi nilai array kecil setelah melakukan proses perbandingan terlebih dahulu.
  3g. Menjadikan nilai array kecil (yang sudah dibandingkan sebelumnya) menjadi nila array code dan akhiri kedua looping tersebut dengan tutup bracket.
4. Memanggil hasil nilai tampung array terebut ketika proses bubble sort sudah dilakukan
5. Membuat looping dimulai dari index awal dari nilai tampung ditambah satu, batas kurang dari nilai tampung array tersebut dengan penambahan satu
  5a. Membuat kondisi if, jika index looping tersebut tidak sama dengan nilai array tampung yang ke dua
  5b. Menampilkan hasil output dengan index dari looping tersebut. 
*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 16 LC-002 Logic Number');

function lostNumbers(first, second, third) {
  // only code here..
  var tampung = [first, second, third];
  
  let code = 0;
  for (let i=0; i< tampung.length; i++){
    for (let j=0; j< tampung.length-i-1; j++){
      if (tampung[j] > tampung[j+1]){
        code = tampung[j];
        tampung[j]= tampung[j+1];
        tampung[j+1] = code;
      }
    }
  }
  //console.log(tampung);
 
  for (let k= tampung[0]+1; k< tampung[2]; k++){
    if (k !== tampung[1]){
      console.log(k);
    }
  }
  //console.log(hasil);
}

lostNumbers(1, 3, 5);
// 2
// 4

lostNumbers(4, 6, 2);
// 3
// 5

lostNumbers(100, 108, 105);
// 101
// 102
// 103
// 104
// 106
// 107

lostNumbers(6, 5, 3);
// 4

lostNumbers(3, 1, 2);
// (TIDAK ADA YANG DITAMPILKAN CONSOLE)

/*
-------------------
The Number Cruncher
-------------------

PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil penambahan angka di
index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
angka di kiri atau kanan, maka dianggap sebagai 0. Kemudian, dari setiap nilai di dalam array tersebut,
ambil yang nilainya ganjil, kemudian tambahkan semua nilai ganjil tersebut dan return nilai total ganjilnya.

Pola
----
input: [x, y, z, a, b]
proses: 
[
  (x + 0 + kanan dari x)
  (y + kiri dari y + kanan dari y)
  (z + kiri dari z + kanan dari z)
  (a + kiri dari a + kanan dari a)
  (b + kiri dari b + 0)
]

Contoh
-------
Input: [ 2 , 5 , 1 , 3 ]
Proses:
=> [ (2 + 0 + 5) , (5 + 2 + 1), (1 + 5 + 3), (3 + 1 + 0) ]
=> [ 7, 8, 9, 4 ]
=> nilai ganjil: 7 dan 9
=> 7 + 9
Output: 16


Input: [2, 3, 1, 4, 1, 5, 0, 3]
Proses:
=> [ 5, 6, 8, 6, 10, 6, 8, 3 ]
=> nilai ganjil: 5 dan 3
=> 5 + 3
Output: 8

Input: [3, 6, 8, 9, 1, 2, 3]
Proses:
=> [ 9, 17, 23, 18, 12, 6, 5 ]
=> nilai ganjil: 9, 17, 23, 5
=> 9 + 17 + 23 + 5
Output: 54

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/
/*
1. Menambahkan nilai tambah nol di nilai awal array yang di inputkan (unshift).
2. Menambahkan nilai tambah nol di nilai akhir array yang di inputkan (push).
3. Membuat nilai tampung array baru terlebih dahulu.
4. Membuat looping dimulai dari index satu, kurang dari panjang parameter numbers dalam function dan penambahan satu
  4a. Tampung hasilnya (push) ke dalam nilai variable baru tersebut dengan penjumlahan ketiga paramater ini
  4a.1. Paramater pertama untuk nilai array pada saat index awal.
  4a.2. Paramater ke dua untuk nilai array pada saat index awal kurangin satu
  4a.3  Paramater ke tiga untuk nilau array pada saat index awal ditambah satu kemudian tutup looping tersebut.
5. Membuat variable total sama dengan nol yang berfungsi untuk mengganti nilai nol tersebut kedalam jumlah total yang sudah dibuat sebelumnya.
6. Membuat looping for dengan dimulai dari index satu, batas kurang dari panjang paramter dikurangin satu dan penambahan satu.
  6a. Membuat kondisi if ketika nilai tiap array tersebut adalah tidak sama dengan nol (ganjil)
  6b. Melakukan penjumlahan total dengan nilai array tersebut dan kemudian tutup looping tersebut.
7. Memanggil hasil output (return), ketika semua proses sudah dilakukan.   
*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 16 LC-003 Array Numbers');

function numberCruncher(numbers) {
  // only code here..
  numbers.unshift(0);
  numbers.push(0);
  //console.log(numbers);
  
  var tampung = [];
  for (var i=1; i< numbers.length-1; i++){
    tampung.push(numbers[i]+numbers[i-1]+numbers[i+1]);
  }
  //console.log(tampung);
  
  var total =0;
  for (var j=0; j< tampung.length; j++){
    if (tampung[j] % 2 !== 0){
      total += tampung[j];
    }
  }
  return total;

}

console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // 6
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54
console.log(numberCruncher([1, 0, 1, 1, 0, 1, 0, 1])); // 3
console.log(numberCruncher([])); // 0

/*
di multidimensi array, yang harus student achieve:
- forming sebuah array multidimensi
- bisa mengakses isi terdalam dari array multidimensi
- bisa menambahkan element ke dalam array multidimensi, ke dimensi yang tepat
*/

/*

--------------
DIGITS GROUPER
--------------

PROBLEM
=======
digitsGrouper adalah sebuah function yang menerima array of number 1 dimensi.
Function akan membentuk array dua dimensi dimana dimensi pertama akan mengelompokkan angka-angka di array tadi sesuai jumlah digit nya.
Group akan berurut. posisi pertama untuk angka 1 digit, posisi kedua untuk angka 2 digit, dan seterusnya, hingga maksimal untuk angka 4 digit.

Contoh:
array of numbers: [1, 12, 1234, 13, 0, 88, 123, 456]
proses:
satu digit -> 1, 0
dua digit -> 12, 13, 88
tiga digit -> 123, 456
empat digit -> 1234

output:
[
  [1, 0],
  [12, 13, 88],
  [123, 456],
  [1234],
]

RULES
=====
Dilarang menggunakan method map, filter, dan reduce.
*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 16 LC-004 Multidimension Array');

function digitsGrouper(numbers) {
  // only code here..
  //console.log(numbers);
 
  let results = [];  
  for (let i=0; i< 4; i++){
  results.push([]);
    for (var j=0; j< numbers.length; j++){ 
      if (numbers[j].toString().length === i+1) {
       results[i].push(numbers[j]);
      }
    }  
  }
  //console.log(results);
  return results;
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]

/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*

---------------
Students Report
---------------

PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 16 LC-005 Object Data Structure');

function getReport(studentGrades) {
  // only code here..
  // buat looping kelas
  const hasil = [];
  const kelas = [];
  for (let k=0; k< 3; k++){
    //manipulas for nilai array
    if (kelas.indexOf(studentGrades[k]) === -1){
      kelas.push(studentGrades[k].classCode);
    }
  }
  //console.log(kelas);
  
  //looping untuk object
  for (let i=0; i< kelas.length; i++){
    let obj = {
      classCode: kelas[i],
      failed: [],
      passed: [],
    };
  
  //looping untuk hasil
  for (let j=0; j< studentGrades.length; j++){
    if (studentGrades[j].classCode === kelas[i] && studentGrades[j].score>= 70) {
      obj.passed.push(studentGrades[j].name);
    }
    else {
      if (studentGrades[j].classCode === kelas[i] && studentGrades[j].score < 70)
      obj.failed.push(studentGrades[j].name);
    }
  }
  
  hasil.push(obj);
}
  
  return hasil;
}
var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', failed: [ 'Siti', 'Aaron' ], passed: [ 'John' ] },
  { classCode: 'B', failed: [ 'Mike', 'Osass' ], passed: [] },
  { classCode: 'C', failed: [ 'Arthur' ], passed: [ 'Budi', 'Yolo' ] },
]
*/

/*

------------------------
Count Letter Recursively
------------------------

PROBLEM
========
Tersedia 2 input: suatu kata dan suatu huruf
Carilah berapa kali huruf muncul di dalam kata.
Gunakan rekursif untuk menyelesaikan soal ini.

Contoh
1) sentence = 'the quick brown fox', letter = 'o'    -->     2

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function countLetterRecursive
- Dilarang mengubah tipe data parameter
- Dilarang menggunakan looping (while, for, do-while, dan lain-lain)
*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 16 LC-006 Recursion');

function countLetterRecursive(sentence, letter) {
  // only code here...
  //console.log(sentence[0]);
  let hasilSentences = sentence.slice(1);
  if (sentence.length === 0) {
    return 0;
  }
  else {
    if (sentence[0] === letter) {
      return 1 + countLetterRecursive(sentence.slice(1), letter); 
    }
    else {
      return 0 + countLetterRecursive(sentence.slice(1), letter); 
    }
  }
}

console.log(countLetterRecursive('12104123', '1')); // 3
console.log(countLetterRecursive('the quick brown fox', 'o')); // 2
console.log(countLetterRecursive('lorem ipsum', 'a')); // 0
console.log(countLetterRecursive('hahaha', 'h')); // 3
console.log(countLetterRecursive('', 'x')); // 0

/*

===================================
Recursive Mastery : Number Iterator
===================================

Nama:________

[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.

[EXAMPLE]
input: 5
output: 012345

input: 7
output: 01234567

[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/

function numberIterator(num) {
  if (num == 0) return '0';
  return numberIterator(num-1) +''+ num;
}

console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'


// Recursive countdown
function countdown(n) {
  if (n > 0) {
    console.log(n)
    countdown(n-1)
  } else {
    console.log('Done!')
  }
}
countdown(15);


//recursive faktorial
function factorial(n) {
  if (n < 0) console.log("Negative numbers not allowed")
  if (n == 0) return 1
  return (n * factorial(n-=1))
}

//   factorial(-1);
console.log(factorial(5))