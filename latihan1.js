// function nextTargetArea(code) {
//   var result = 0
//   for(var i=0;i<code.length;i++){
//       if(code[i] === 'W') result += 2
//       else if(code[i] == 'R') result += 3
//       else if(code[i] == 'U') result += 1
//       else if(code[i] == 'X') result += 6
//       else if(code[i] == 'V') result += 7
//       else if(code[i] == 'G') result += 8
//   }
//   return result
// }

// console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
// console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
// console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
// console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
// console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"

// function howManyGame(minutes, gamesLength){
//     var result = 0
//     var games = gamesLength.sort(function(a,b){return a-b})
//     for(var i=0;i<games.length;i++){
//         if(minutes >= games[i]){
//             result++
//             minutes -= games[i]
//         }
//     }
//     return result
// }

// console.log(howManyGame(300, [150, 120, 50, 30, 100])); // 4
// console.log(howManyGame(1000, [200, 200, 300, 100, 200, 1000])); // 5
// console.log(howManyGame(400, [75, 100, 20, 30])); // 4
// console.log(howManyGame(500, [250, 250, 100, 150])); // 3
// console.log(howManyGame(0, [10, 300])); // 0

// function groupOddEven(num) {
//     if(num.length==0) return ''
//     var odd= []
//     var even= []
//     for(var i=0;i<num.length;i++){
//         if(num[i]%2 !== 0) odd.push(num[i])
//         else even.push(num[i])
//     }
//     return 'ODD: '+odd.join(', ')+' EVEN: '+even.join(', ')
// }

// // TEST CASES
// console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
// console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
// console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
// console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
// console.log(groupOddEven([])); // ""


// function mostFrequentItem(arr) {
//     var result = []
//     var count = []
//     for(var i=0;i<arr.length;i++){
//         if(result.indexOf(arr[i]) == -1) {
//             result.push(arr[i])
//             count.push(1)
//         } else {
//             count[result.indexOf(arr[i])]++
//         }
        
//     }
//     for(var j=0;j<result.length;j++){
//         result[j]+='('+count[j]+')'
//     }
//     count.sort()
//     var hasil = []
//     for(var k =0;k<result.length;k++){
//         if(Number(result[k][result[k].length-2]) == count[k]) hasil.push(result[k])
//     }
//     return count
// }
// console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
// console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
// console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'

// function citySort (cities) {
//     function letter(kata){
//         return kata.toLowerCase().split('').sort().join('')
//     }
//     var result = []
//     for(var i=0;i<cities.length;i++){
//         var tampung =[cities[i]]
//         for(var j=i;j<cities.length;j++){
//             if(letter(cities[j]) == letter(tampung[0]) && tampung.indexOf(cities[j]) == -1){
//                 tampung.push(cities[j])
//                 cities.splice(j,1)
//             }
//         }
//         result.push(tampung)
//     }
//     return result
// }

// console.log(citySort(['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris']))

// YOUR ALGORITHM
// [
//     [ 'Tokyo', 'Kyoto' ],
//     [ 'London', 'Donlon' ],
//     [ 'Rome' ],
//     [ 'Paris' ]
// ]

function squareNumber(num) {
    // if (num < 3) return "Minimal input adalah 3"
    // else {  
    //     var hasil = []
    //     var kelipatan = 1;
    //     for (var i = 0; i < num; i++){
    //         hasil.push([])
    //     }
    // }
    
    // for(var j = num-1; j >= 0; j--){
    //   for(var k = 0; k < num; k++){
    //     hasil[j].push(kelipatan)
    //     kelipatan++
    //     if (k % 2 !== 0 ) hasil[k].sort(function(a,b) {return b > a})
    //   }
    // }
    // return hasil
    var result = []
    var end = num*num
    for(var i=0;i<num;i++){
        var tampung = []
        for(var j=0;j<num;j++){
            tampung.push(end)
            end--
        }
        result.push(tampung)
    }
    for( var k=0;k<result.length;k++){
        if(result.length%2 == 0){
            if(k%2 != 0) result[k].sort(function(a,b) {return a - b})
        }
        if(result.length%2 != 0){
            if(k%2 == 0) result[k].sort(function(a,b) {return a - b})
        }
    }
    

    return result
}
    
  
  
  console.log(squareNumber(3));
  // [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]
  
  console.log(squareNumber(4));
  // [ [ 16, 15, 14, 13 ],
  //   [ 9, 10, 11, 12 ],
  //   [ 8, 7, 6, 5 ],
  //   [ 1, 2, 3, 4 ] ]
  
  console.log(squareNumber(5));
  // [ [ 21, 22, 23, 24, 25 ],
  //   [ 20, 19, 18, 17, 16 ],
  //   [ 11, 12, 13, 14, 15 ],
  //   [ 10, 9, 8, 7, 6 ],
  //   [ 1, 2, 3, 4, 5 ] ]
  
  console.log(squareNumber(2)); // Minimal input adalah 3




//
//

/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

// Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
// Contoh
// -------
// 1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
//    output: Nice work, detective! You got all villains: 2
// 2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
//    output: Ooops, you die. You got 3 villains
// 3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
//    output: Ooops, you die. You got 2 villains
// */

// // Algoritma / Pseudocode here..
// unction getVillain (input){
//   var countVillain = 0;
//   var countJebakan = 0;
//   for(var i = 0; i < input.length; i++){
//     if(input[i] === 'Villain'){
//       countVillain++
//     }else if(input[i] === '@'){
//       countJebakan++
//     }
//   }

//   if(countJebakan > 2){
//     return 'Ooops, you die. You got ' + countVillain + ' villains'
//   }else{
//     return 'Nice work, detective! You got ' + countVillain + ' villains'
//   }
  
// }

// console.log(getVillain(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']));
// console.log(getVillain(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']));
// console.log(getVillain(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']))

// 1. buatn fungsi getVillian dengan parameter str
// 2. masukan variabel countVil sama dengan 0
// 3. masukan variabel countTrap samas dengan 0
// 4. buat perulangan dengan variabel i sama dengan 0, dan kondisi i lebih kecil sama dengan str.length,dengan dengan increment setiap looping 1 kali. maka lanjut 4.a
//   4.a jika str[i] sama dengan 'villain', maka counteVil nambah 1(countVill++)
//   4.b jika str[i] sama dengan '@', maka countTrap nambah 1
// 5. di luar looping 1, buat kondisi jika countTrap kurang dari 2,maka lanjut 5.a
//   5.a dikembalikan nilai  'Ooops, you die. You got ' ditambah countVill ditambah 'Villain'.
// 6. jika countTrap lebih dari 2,maka lanjut ke 6.a
//   6.a dikembalikan nilai 'Nice work, detective! You got ' ditambah countVil dan ditambah ' villains'
// 7. akhir dari fungsi villian

/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

*/

// function evenPairsSum (str) {
//     var hasil = []
    
//       for(var i = 0; i < str.length; i++){
    
//         if ( i % 2 === 0){ 
  
//           if (str[i+1] === undefined) {
//             hasil.push(str[i] + str[0])
//           } else {
    
//           hasil.push(str[i] + str[i+1])
//         }
//       }
    
//       var result = 0;
    
//       for(var j = 0; j < hasil .length; j++){
    
//         if(hasil[j] % 2 === 0){
          
//           result += parseInt(hasil[j]);
//         }
//       }
    
//       }
//       return result
//   }
//   console.log(evenPairsSum('2044101211')); // 86
//   console.log(evenPairsSum('33791363')); // 0
//   console.log(evenPairsSum('23426766201')); // 140
//   console.log(evenPairsSum('2478201')); // 134
  
  
  
  /*
  Count solo
  ===========
  Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
  dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
  
  Example:
  input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
  proses: 3 + 1 + 2
  result: 6
  
  RULES:
   - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
   - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
  
  */
  
//   function countSolo(numbers) {
//       // your code here
//       var obj = {};
  
//     for (var i = 0 ; i < numbers.length ; i++){
//       if(obj[numbers[i]] === undefined) {
//         obj[numbers[i]] = 1
//       } else {
//         obj[numbers[i]] += 1
//       }
//     }
//     var hasil = []
//     for (var key in obj) {
//       if(obj[key] < 2) {
//         hasil.push(key)
//       }
//     }
//     var num = 0
//       for (var j = 0 ; j < hasil.length; j++){
//       num += parseInt(hasil[j])
//     }
//     return num
    
//   }
  
  
  
//   console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
//   console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2
//   console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38
  