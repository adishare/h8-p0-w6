/*
    diberikan sebuah function numberArrayOperation dengan sebuah parameter array
    bertipe number, dimana output dari function ini adalah array yang telah mengalami
    proses perkalian terlebih dahulu dan kemudian menjumlahkan semua value didalamnya.
    Ketentuan perkalian sebagai berikut:
    - jika angka merupakan bilangan genap maka kalikan bilangan tersebut dengan 3
    - jika angka merupakan bilangan ganjil maka kalikan angka tersebut dengan 4
    - jika angka merupakan bilangan kelipatan 4 maka kalikan angka tersebut dengan 5
    Kemudian jumlahkan semua angka yang telah mengalami proses perkalian!
    Contoh:
    input : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
    proses :
      * angka 1 merupakan bilangan ganjil, maka 1x4 = 4;
      * angka 2 merupakan bilangan genap, maka 2x3 = 6;
      * angka 3 merupakan bilangan ganjil, maka 3x4 = 12;
      * angka 4 merupakan bilangan genap TAPI merupakan bilangan kelipatan 4, maka 4x5 = 20;
      * angka 5 merupakan bilangan ganjil, maka 5x4 = 20;
      * ... dst
      * angka 12 merupakan bilangan genap TAPI merukapan bilangan kelipatan 4, maka 12x5 = 60;
      * angka 13 merupakan bilangan ganjil, maka 13x4 = 52;
      Kemudian jumlahkan angka-angka yang telah mengalami proses perkalian:
      4 + 6 + 12 + 20 + 20 + ... + 60 + 52 = 370
    output : 370
    RULES:
    - DILARANG menggunakan built in function .map, .filter dan .reduce!!!
*/

function numberArrayOperation(arr) {
  var results = [];
  var total = 0;

  for (var i = 0; i <= arr.length - 1; i++) {
    var inspector = arr[i];
    if (inspector % 4 === 0) {
      inspector *= 5;
      results.push(inspector);
    } else if (inspector % 2 === 0) {
      inspector *= 3;
      // console.log(inspector);
      results.push(inspector);
      // console.log(results);
    } else if (inspector % 2 !== 0) {
      inspector *= 4;
      results.push(inspector);
      // console.log(results);
    }
  }

  // console.log(results);

  for (var j = 0; j <= results.length - 1; j++) {
    total += results[j];
  }

  // console.log(total);

  return total;
}

console.log(numberArrayOperation([ 22, 4, 5, 9, 44, 8, 12, 23 ])); // 554
console.log(numberArrayOperation([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ])); // 370