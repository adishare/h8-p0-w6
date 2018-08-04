var divCointainer = document.getElementById('main')
var divOfPost = document.createElement('div')
divOfPost.setAttribute('id', 'content')
divCointainer.appendChild(divOfPost)

var length = ['13 May 2016','14 May 2016']

for(var i=0;i<length.length;i++){
    var div = document.createElement('div')
    div.setAttribute('class','post')
    divOfPost.appendChild(div)

    var h1 = document.createElement('h1')
    h1.innerHTML = 'Judul Post '+(i+1)
    div.appendChild(h1)

    var span =document.createElement('span')
    span.innerHTML ='Published On '+length[i]
    div.appendChild(span)

    var p = document.createElement('p')
    p.innerHTML = 'Selamat datang di website post: '+length[i]
    div.appendChild(p)

    var button =document.createElement('button')
    button.setAttribute('class','share-btn')
    button.innerHTML = 'Share'
    div.appendChild(button)
}