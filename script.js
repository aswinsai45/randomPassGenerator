const passwordBox = document.getElementById("password");
const length=15;

const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_{}[]:;"
const allChars = uCase+lCase+number+symbol;

function createPassword(){
    let password = "";
    password+=uCase[Math.floor(Math.random()*uCase.length)];
    password+=lCase[Math.floor(Math.random()*lCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while (length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;

}


