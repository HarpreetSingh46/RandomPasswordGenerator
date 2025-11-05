const passwordBox= document.getElementById("password");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"
const symbols="!@#$%^&*(){}[]<>?/|_-=+"

const allChars= upperCase+lowerCase+symbols+number;

function createPassword() {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword() {
    if (passwordBox.value === "") {
        alert("First generate a password 😅");
        return;
    }
    passwordBox.select(); 
    document.execCommand("copy"); 
    alert("Password copied to clipboard ✅");
}