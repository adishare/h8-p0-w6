// var fillme = document.getElementById("fill-me")
// fillme.innerHTML = 'HALO!'
document.getElementById("fill-me").innerHTML = 'HALOooo!'

// var changeAllOfMe = document.getElementsByClassName("change-all-of-me")
// for(var i=0;i<changeAllOfMe.length;i++){
//     changeAllOfMe[i].innerHTML = 'Halo jugak!'    
// }
for(var i=0;i<document.getElementsByClassName("change-all-of-me").length;i++){
    document.getElementsByClassName("change-all-of-me")[i].innerHTML = i+1+' Halo jugak!'    
}


var pageHeadings = document.getElementsByTagName("h2")
pageHeadings[0].innerHTML = 'Apa kabarr!'


