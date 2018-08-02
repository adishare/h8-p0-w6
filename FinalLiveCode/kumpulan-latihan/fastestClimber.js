/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.
RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()
*/

function fastestClimber(string) {
  if (string.length === 0) {
    return "No string";
  } else {
    // console.log(str.length);

    // init var
    var arrclimber = []; // arr to contain obj of every unique heroes
    var timeCount = 1; // var to cotain array index of hero object


    for (var i = 0; i < string.length; i++) {

      // init var to contain stringing value
      var inspectorNumberOfclimber = string[i];

      // logic to detect number of heroes
      if (inspectorNumberOfclimber === ":") {

        // for every unique hero detected, push new obj into arrOfObjHero
        arrclimber.push(timeCount = {
          name: "",
          time: ""
        })
        timeCount++; // change hero count value
      }
    }
  }
  // console.log(arrclimber);

  var arrclimberAccess = 0;
  var propertyAccess = "name";

  for (var j = 0; j < string.length; j++) {
    var inspectorclimberInfo = string[j];

    // logic to differentiate b/w hero name and hero type
    if (inspectorclimberInfo !== ':' && inspectorclimberInfo !== ',') {
      arrclimber[arrclimberAccess][propertyAccess] += inspectorclimberInfo;
    } else if (inspectorclimberInfo === ":") {
      propertyAccess = "time";
    } else if (inspectorclimberInfo === ",") {
      arrclimberAccess++;
      propertyAccess = "name";
    }
  }

  // console.log(arrclimber);


  for (var k = 0; k < arrclimber.length; k++) {
    var timeChanger = arrclimber[k].time;
    var objConvert = {
      hour: "",
      minutes: ""
    }
    var propertyAccess = "hour";
    for (var m = 1; m < timeChanger.length; m++) {
      if (timeChanger[m] !== " ") {
        objConvert[propertyAccess] += timeChanger[m]
      } else if (timeChanger[m] === " ") {
        propertyAccess = "minutes"
      }
    }
    // console.log(objConvert);

    var convertedMinutes = (parseInt(objConvert.hour) * 60) + parseInt(objConvert.minutes)

    // console.log(convertedMinutes);

    arrclimber[k].time = convertedMinutes;
  }

  // console.log(arrclimber);



  var tempoFastest = 100000000000000000;
  var tempoName = ""
  for (var l = 0; l < arrclimber.length; l++) {
    var timeInspector = (arrclimber[l].time);
    // console.log(timeInspector);
    if (tempoFastest > timeInspector) {
      tempoFastest = timeInspector;
      tempoName = arrclimber[l].name
    }
  }
  return tempoName;
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian