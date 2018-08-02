function blockPager(int) {
  for (var i=0; i<int ;i++){
    var result = ''
    for (var j=0; j<int; j++){
      result += '# '
    }
    console.log(result)
  }
}
blockPager(7)

function tanggaPager(int) {
  var tampung = ''
  for(var i=0; i<int ; i++){
    tampung += "# "
    console.log(tampung)
  }
}
tanggaPager(7)



function turunPager(int) {
  for(var i=int; i>0; i--) {
    var tampung = ''
    for (var j=i; j>0; j--) {
      tampung += '# '
    }
    console.log(tampung)
  }
}
turunPager(7)
