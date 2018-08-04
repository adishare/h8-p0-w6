var inputTagArr = document.getElementsByTagName("input")
var labelArr = document.getElementsByTagName("label")

function onsubmitFunction(){
    for(var i=0;i<inputTagArr.length;i++){
        if(document.forms["main-form"][inputTagArr[i].getAttribute("name")].value ==''){
            event.preventDefault()
            alert(labelArr[i].innerHTML+' tidak boleh kosong')
            return false
        }
        else if(document.getElementById("password").value != document.getElementById("passwordCon").value){
            event.preventDefault()
            document.getElementById("passwordCon").value = ''
            alert('Confirm password salah')
            return false
        }
        else if(document.getElementById("email").value != document.getElementById("emailCon").value){
            event.preventDefault()
            document.getElementById("emailCon").value = ''
            alert('Confirm email salah')
            return false
        }
    }
}
