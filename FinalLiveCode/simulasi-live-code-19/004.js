/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary (data) {
  var result = {}
  for(var i=0;i<data.length;i++){
    if(result[data[i][1]] === undefined) result[data[i][1]] = {total: 0, names:[], index: data[i][1]}
    if(data[i][1] === result[data[i][1]].index){
      result[data[i][1]].total += 1
      result[data[i][1]].names.push(data[i][0])
    }
  }

  var resultKey = Object.keys(result)
  for(var j=0;j<resultKey.length;j++){
    delete result[resultKey[j]].index
  }


  return result
}

// Test cases
console.log(participantsSummary([
  ['Dimitri', 'Russia'],
  ['Heihachi', 'Japan'],
  ['Sergei', 'Russia'],
  ['Kazuya', 'Japan'],
  ['Hwoarang', 'South Korea'],
  ['Jin', 'Japan']
]));
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

console.log(participantsSummary([]));
// No participants
