/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'q-lD4MZax-0-raQ-q-ew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX


1. fungsi menerima parameter str dan viruses
2. jika nilai str atau viruses false maka return 'No virus detected'
3. buat variabel strlow berisi lowercase dari str
4. buat variabel virus berisi lowercase dari viruses dan split  berdasarkan '|'
5. buat perulangan i sebanyak panjangan virus
  5.a. buat perulangan k sebanyak panjangan strlow
    5.a.1. jika strlow ke-J sama dengan virus ke-i maka tambahkan result dengan 1
6. jika result sama dengan 0 maka return 'no virus detected', jika tidak jalankan langkah berikutnya
7. return result ditambah ' viruses detected' 
*/

function virusCheck (str, viruses) {
  if(!viruses || !str) return 'No virus detected'
  var strlow = str.toLowerCase()
  var virus = viruses.toLowerCase().split('|')
  var result = 0
  for(var i=0;i<virus.length;i++){
    for(var j=0;j<strlow.length;j++){
      if(strlow[j] === virus[i]) result+= 1
    }
  }
  if(result == 0) return 'No virus detected'
  else return result +' viruses detected'
}

console.log(virusCheck('q-lD4MZax-0-raQ-q-ew', 'x|0|q')); // 4 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4-O4-TmIF6ONaiMlzp-X-x-P-qwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
