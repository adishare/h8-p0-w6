// /*
// ================
// Initial Grouping
// ================
// Name : _________________
// [INSTRUCTION]
// Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
// berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
// mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
// array dua dimensi.
// [EXAMPLE]
// Input: ['Budi', 'Badu', 'Joni', 'Jono']
// Proses:
// Huruf depan yang ditemukan: B dan J
// Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
// Susun array baru sebagai berikut:
// [
// [ 'Budi', 'Badu' ],
// [ 'Joni', 'Jono' ],
// ]
// Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut menjadi:
// [
// [ 'B', 'Budi', 'Badu' ],
// [ 'J', 'Joni', 'Jono' ],
// ]
// Kamu tidak perlu peduli dengan urutan alphabet atau nama siapa yang keluar terlebih dahulu!
// [CONSTRAINTS]
// Dilarang menggunakan sintaks Set atau Regex
// /* EXPLAIN YOUR LOGIC BELOW! (Required) */
// // Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// // Nilai tidak valid (0) jika logic dan code berbeda!

// // 1. Buat variable initial untuk menampung setiap alphabet yang akan muncul.
// // 2. Lakukan pengulangan untuk memeriksa angka depan dari setiap index kata di array studentsArr.
// // 3. Buat variable cek berupa string kosong untuk menampung apabila huruf depan pada step 2 sesuai dengan kondisi yang diberikan maka akan ditampung ke variable cek tersebut.
// // 4. Setelah pengecekan selesai, push hasilnya ke variable initial.
// // 5. Kemudian buat variable inisial menampung semua hasil dari initial(poin 1) per alphabet.
// // 6. Kemudian buat var hasil berupa array kosong dan lakukan pengulangan terhadap variable inisial (poin 5), apabila variable inisial indexnya lebih dari 1 push isinya ke variable hasil.

// function initialGrouping(studentsArr) {
//     var init = []
//     for(var i=0; i<studentsArr.length;i++){
//         if(init.indexOf(studentsArr[i][0]) == -1) init.push(studentsArr[i][0][0])
//     }

//     var result = []
//     for(var j=0;j<init.length;j++){
//         var tampung = [init[j]]
//         for(var k=0;k<studentsArr.length;k++){
//             if(studentsArr[k][0]== tampung[0][0]) tampung.push(studentsArr[k])
//         }
//         result.push(tampung)
//     }

//     return result
// }
//   console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
//   /*
//   [
//     [ 'B', 'Budi', 'Badu' ],
//     [ 'J', 'Joni', 'Jono' ]
//   ]
//   */
  
//   console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
//   /*
//   [
//     [ 'M', 'Mickey' ],
//     [ 'Y', 'Yusuf' ],
//     [ 'D', 'Donald' ],
//     [ 'A', 'Ali' ],
//     [ 'G', 'Gong' ]
//   ]
//   */
  
//   console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
//   /*
//   [
//     [ 'R', 'Rock', 'Rocker' ],
//     [ 'S', 'Stone', 'Sticker' ],
//     [ 'B', 'Brick' ]
//   ]
//   */




// function loveMeNot(decisions) {
//     var yes = 0
//     var no = 0
//     for(var i=0;i<decisions.length;i++){
//         if(decisions[i] == true) yes++
//         if(decisions[i] == false) no++
//     }
//     if(yes>no) return 'sayang'
//     if(yes==no) return 'galau'
//     if(no>yes) return 'benci'
    
// }
  
//   // TEST CASES
//   console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
//   console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
//   console.log(loveMeNot([true, false])); // "GALAU"
//   console.log(loveMeNot([])); // "GALAU"
//   console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("

// Function akan mereturn hasil kalkulasi dari operasi tersebut.
// Jika tidak ada angka yang diberikan, function akan me-return 0.

// [CONTOH]
// input: [1, 2, 3, 4, 5]
// proses: 0 + 1 - 2 + 3 - 4 + 5
// output: 3

// input: [5, 4, 3, 2, 1, 2]
// proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
// output: 1

// input: [1, 1, 1, 1]
// proses: 0 + 1 - 1 + 1 - 1
// output: 0

// input: []
// proses: 0
// output: 0
// */

// function plusMinusProcess(numbers) {
//     var result = 0
//     for(var i=0;i<numbers.length;i++){
//         if(i%2==0) result += numbers[i]
//         else result -= numbers[i]
//     }
//     return result
//   }
  
//   // TEST CASES
//   console.log(plusMinusProcess([1, 2, 3, 4, 5])); // 3
//   console.log(plusMinusProcess([5, 4, 3, 2, 1, 2])); // 1
//   console.log(plusMinusProcess([1, 1, 1, 1])); // 0
//   console.log(plusMinusProcess([0, 10, 2, 5, 7])); // -6
//   console.log(plusMinusProcess([])); // 0