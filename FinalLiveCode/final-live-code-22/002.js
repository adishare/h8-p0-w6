/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

/*
1. buat variabel panjangWords dengan nilai panjang words dikurangi 1
2. buat variabel result dengan string kosong
3. buat perulangan i sebanyak panjang sentence dengan increment 1
  3.A. jika karakter sentence ke i sama dengan karakter pertama words dan sentence ke i ditambah panjangWords sama dengan karakter akhir words
    3.A.a. buat variabel awalsensor dengan nilai i
    3.A.b. buat variabel ahirsensor dengan nilai i ditambah panjangwords
  3.B. jika i lebih besar sama dengan awalsensor dan lebih kecil sama dengan ahirsensor
    3.B.a. tambahkan variabel result dengan '*'
    3.B.b. jika tidak tambahkan result dengan sentence ke i
4. kembalikan/return result


*/

function sensorSentence ( sentence, words ) {
  var panjangWords = words.length-1
  
  var result= ''
  for(var i=0;i<sentence.length;i++){
      if(sentence[i] == words[0] && sentence[i+panjangWords] == words[panjangWords]){
          var awalsensor = i
          var ahirsensor = i+panjangWords
      }
      if(i>= awalsensor && i<=ahirsensor) result+= '*'
      else result+= sentence[i]
  }

  return result
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
