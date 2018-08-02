/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
Let's start our own wizardy, shall we?
[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

//PSEUDOCODE here

/*
arrScore = ["Gryffindor", "Slytherin", "Slytherin"]
goalGryffindor = 0
goalSlytherin = 0
jumlahTotalGol = arrScore.length - 1
FOR count = 0, count <= jumlahTotalGol
  inspector = arrScore[count]
  IF inspector === "Gryffindor" THEN goalGryffindor = goalGryffindor + 1
  ELSEIF inspector === "Slytherin" THEN goalSlytherin = goalSlytherin + 1
  ENDIF
NEXT counter
IF goalGryffindor > goalSlytherin THEN DISPLAY "Gryffindor Juara Futsal Hogwarts 2018"
IF goalSlytherin > goalGryffindor THEN DISPLAY "Slytherin Juara Futsal Hogwarts 2018"
IF goalSlytherin === goalGryffindor THEN DISPLAY "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
*/

function whosTheWinner(goals) {

  var goalGryffindor = 0;
  var goalSlytherin = 0;
  var jumlahTotalGol = goals.length - 1;

  for (var i = 0; i <= jumlahTotalGol; i++) {
    var inspector = goals[i];
    if (inspector === "Gryffindor") {
      goalGryffindor ++;
    } else if (inspector === "Slytherin") {
      goalSlytherin ++;
    }
  }

  if (goalGryffindor > goalSlytherin) {
    return "Gryffindor Juara Futsal Hogwarts 2018";
  } else if (goalSlytherin > goalGryffindor) {
    return "Slytherin Juara Futsal Hogwarts 2018";
  } else if (goalSlytherin === goalGryffindor) {
    return "Draw, pertandingan akan dilanjutkan dengan penalty kick!";
  }

}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
