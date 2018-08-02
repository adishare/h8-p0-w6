/*
========================
The Alphabetical Express
========================

Name :_____________

[INSTRUCTIONS]

formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.

Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.

Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.

Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.

Bentuk Kereta:

[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]

Bentuk Gerbong:

Contoh bentuk gerbong A
[ 'A', 'A' ]

Contoh bentuk gerbong B
[ 'B', 'B' ]

Kumpulan penumpang direpresentasikan dalam string.

Contoh:

input: 'ABCA'

maka, ada penumpang A, B, C, dan A.

Kita masukkan setiap penumpang ke masing-masing gerbong.

output: [ ['A', 'A'], ['B'], ['C'], [], []]

gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.

Function akan me-return array kereta yang telah dibentuk.


[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/

function formTrainSeating(passengers) {
    var result=[[],[],[],[],[]]
    for(var i=0;i<passengers.length;i++){
        if(passengers[i] === 'A') result[0].push(passengers[i])
        if(passengers[i] === 'B') result[1].push(passengers[i])
        if(passengers[i] === 'C') result[2].push(passengers[i])
        if(passengers[i] === 'D') result[3].push(passengers[i])
        if(passengers[i] === 'E') result[4].push(passengers[i])
    } 
    return result   
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
