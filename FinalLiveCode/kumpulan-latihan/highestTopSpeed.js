/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.
Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.
Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan
# Contoh I/O
Contoh input dan output bisa kamu lihat di test case
# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'
# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  if (data.length === 0) {
    return "No data";
  } else {
    // console.log(str.length);

    // init var
    var arrSpeed = []; // arr to contain obj of every unique heroes
    var speedCount = 1; // var to cotain array index of hero object


    for (var i = 0; i < data.length; i++) {

      // init var to contain dataing value
      var inspectorNumberOfSpeed = data[i];

      // logic to detect number of heroes
      if (inspectorNumberOfSpeed === ":") {

        // for every unique hero detected, push new obj into arrOfObjHero
        arrSpeed.push(speedCount = {
          name: "",
          speed: ""
        })
        speedCount++; // change hero count value
      }
    }
    // console.log(arrSpeed);
  }

  var arrSpeedAccess = 0;
  var propertyAccess = "name";

  for (var j = 0; j < data.length; j++) {
    var inspectorSpeedInfo = data[j];

    // logic to differentiate b/w hero name and hero type
    if (inspectorSpeedInfo !== ':' && inspectorSpeedInfo !== ',') {
      arrSpeed[arrSpeedAccess][propertyAccess] += inspectorSpeedInfo;
    } else if (inspectorSpeedInfo === ":") {
      propertyAccess = "speed";
    } else if (inspectorSpeedInfo === ",") {
      arrSpeedAccess++;
      propertyAccess = "name";
    }
  }

  // console.log(arrSpeed);

  var tempoFastest = 0;
  for (var l = 0; l < arrSpeed.length; l++) {
    var speedInspector = parseInt(arrSpeed[l].speed);
    // console.log(speedInspector);
    if (tempoFastest < speedInspector) {
      tempoFastest = speedInspector;
    }
  }
  return tempoFastest;

}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data