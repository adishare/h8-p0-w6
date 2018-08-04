var divCointainer = document.getElementById('main')

var contentDiv = document.createElement('div')
contentDiv.setAttribute('id','content')
divCointainer.appendChild(contentDiv)


var contentPostDiv = document.createElement('div')
contentPostDiv.setAttribute('class','content-post')
contentDiv.appendChild(contentPostDiv)

var h1 = document.createElement('h1')
h1.innerHTML = 'Judul Post'
contentPostDiv.appendChild(h1)

var span = document.createElement('span')
span.innerHTML = 'Published on 3 Aug 2018'
contentPostDiv.appendChild(span)

var p = document.createElement('p')
p.innerHTML = 'Selamat datang di website kami'
contentPostDiv.appendChild(p)

var button = document.createElement('button')
button.setAttribute('class','share-post-button')
button.innerHTML = 'Share this post'
contentPostDiv.appendChild(button)

var contentPostDiv2 = document.createElement('div')
contentPostDiv2.setAttribute('class','content-post')
contentDiv.appendChild(contentPostDiv2)

var h1a = document.createElement('h1')
h1a.innerHTML = 'Judul Post 2'
contentPostDiv2.appendChild(h1a)