const background = document.getElementById("background");
const password = document.getElementById("password");
const passvalue = document.getElementById("passvalue");
const strength = document.getElementById("strength");

password.addEventListener("input", blurMe);

// florins solution

function blurMe(e){
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;


    // You can uncomment this part for fun
    // passvalue.innerHTML = input;
    // passvalue.style.width = "200px";
    // const bad = "Password too weak";
    // const good = "Good password";

    // strength.innerText = "Live no balance o";

    // if(length <= 9){
    //     return strength.innerHTML = bad;
    // } else {
    //     return strength.innerHTML = good;
    // }
}

// My solution
// What i did was that after putting an eventlistener on the input
// I created a function that would be called which is the blurMe
// In this fnction i did 3 stuffs;
// I stored the length of the input entered in the password in a const length
// I stored the formula used in adjusting our blur value in a const blurValue
// Lastly i passed the value gotten from the blurValue inside the background blur style

// function blurMe(){
//     // const length = e.target.value.length;
//     const length = password.value.length;
//     const blurValue = 20 - length * 2;
//     background.style.filter = `blur(${blurValue}px)`;
// }