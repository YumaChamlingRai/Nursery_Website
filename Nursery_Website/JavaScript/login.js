function submit(){
    var fname = document.forms['contact']['fname'].value;
    var lname = document.forms['contact']['lname'].value;
    var email = document.forms['contact']['email'].value;
    var phnumber = document.forms['contact']['phonenumber'].value;
    var username = document.forms['contact']['username'].value;
    var pw = document.forms['contact']['pw'].value;

    if(fname == "" || lname == "" || email == "" || phnumber == "" || username == "" || pw == ""){
        document.getElementById('warning').innerHTML = "EMPTY CREDENTIALS !! PROVIDE THE REQUIRED DATA";
    }else{
        alert('LOGIN SUCCESSFUL.');
    }
}