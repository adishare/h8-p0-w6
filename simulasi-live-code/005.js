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

function getReport(studentGrades) {
  // 1. variable result dengan rangka per classCode --------
  // var result = [
  //   {classCode: 'A' , passed: [], failed: []},
  //   {classCode: 'B' , passed: [], failed: []},
  //   {classCode: 'C' , passed: [], failed: []}
  // ]
  // for(var i=0;i<result.length;i++){
  //   for(var j=0;j<studentGrades.length;j++){
  //     if(studentGrades[j].classCode == result[i].classCode){
  //       if(studentGrades[j].score>=70) result[i].passed.push(studentGrades[j].name)
  //       else result[i].failed.push(studentGrades[j].name) 
  //     }
  //   }
  // }
  // return result
  
  // 2. variable result dengan array kosong (jika classCode nya jutaan) ------
  var result = []
  for(var i=0;i<studentGrades.length;i++){
    if(result[studentGrades[i].classCode] === undefined){
      result[studentGrades[i].classCode] = {classCode: studentGrades[i].classCode, passed: [], failed:[]}
    }
    if(grades1[i].score>= 70) result[studentGrades[i].classCode].passed.push(grades1[i].name)
    else result[studentGrades[i].classCode].failed.push(grades1[i].name)
  }
  return Object.values(result)
}


console.log(getReport(grades1));


// [
//   { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
//   { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
//   { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
// ]
