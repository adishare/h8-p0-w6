function onsubmitFunction(){
    var leftContentDiv = document.getElementById('leftContent')
    
    var cardDiv = document.createElement('div')
    cardDiv.setAttribute('class','card')

    var cardHeaderDiv = document.createElement('div')
    cardHeaderDiv.setAttribute('class','cardheader')
    cardHeaderDiv.setAttribute('onclick','hapusNote()')
    cardHeaderDiv.innerHTML = 'X'

    var cardMainDiv = document.createElement('div')
    cardMainDiv.setAttribute('class','cardMain')

    var cardFooterDiv = document.createElement('div')
    cardFooterDiv.setAttribute('class', 'cardFooter')


    var postComment = document.getElementById('postContent').value
    cardMainDiv.innerHTML = postComment
    
    var postUsername = document.getElementById('username').value
    cardFooterDiv.innerHTML = 'QNote by: '+postUsername

    if(postComment == '' || postUsername =='') return false

    cardDiv.appendChild(cardHeaderDiv)
    cardDiv.appendChild(cardMainDiv)
    cardDiv.appendChild(cardFooterDiv)
    leftContentDiv.appendChild(cardDiv)   
}

function hapusNote(){
    alert('note tidak bisa dihapus')
}

function bersih(){
    document.getElementById('username').value = ''
}