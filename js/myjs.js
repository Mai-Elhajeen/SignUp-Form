// Mai Yahia Alhajeen

// first function
var i;
function printName(){
    var myName = "Mai";
    myName = myName.toUpperCase();

    for(i=0; i<11; i++){
        console.log(i,myName);
    }
    return myName;
}
//second function
var myUserName =  document.getElementById('username');
var myEmail =  document.getElementById('email');
var myPassword =  document.getElementById('password');
var myPasswConfirm = document.getElementById('password-confirm');
function validateData(){

    if(myUserName.value.length <3){
        document.getElementById('msg').innerHTML="Wrong The UserName";
    }
    else if(myPassword.value.length <8){
        document.getElementById('msg').innerHTML="Wrong The Password";
    }
    else if(myPassword.value !== myPasswConfirm.value){
        document.getElementById('msg').innerHTML="The Password is not Confirm";
    }
    else{
        document.getElementById('msg').innerHTML="Your Request Successfully Accept";
        return console.log("=====User Info=====" + "\n" + "The Username is: " + myUserName.value + "\n" + "The Email is: " + myEmail.value + "\n" + "The Password is: " + myPassword.value);

    }

}
//Main  function includes printName function & validateData function
function printInfo(){
    printName();
    validateData()
}

