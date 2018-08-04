var eldestParent = document.getElementById("eldest-parent")
eldestParent.children[0].innerHTML = 'Diakses Melalui Eldest Parent'

var aChild = document.getElementById("a-child")
aChild.previousElementSibling.innerHTML = 'Diakses Melalui a Child'
aChild.nextElementSibling.innerHTML = 'Diakses Melalui a Child'

var parentOfparentAchild = aChild.parentNode.parentNode
parentOfparentAchild.nextElementSibling.innerHTML = 'Diakses Melalui a Child'

