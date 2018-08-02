// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawTriangle yang menerima satu parameter bertipe number.
Function drawTriangle tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
output:
321
32
3

Contoh 2
--------
input: 6
output:
654321
65432
6543
654
65
6

*/

function drawTriangle(num) {
  for(var i=num;i>0;i--){
    var count = num
    var tampung=''
    for(var j=0;j<i;j++){
      tampung+= count
      count--
    }
    console.log(tampung)
  }
}

drawTriangle(6);
drawTriangle(3);
