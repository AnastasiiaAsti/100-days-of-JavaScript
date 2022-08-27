const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

btn.addEventListener("click", palindromeCheck)


//need to have different check if word.length is even and odd
//


function palindromeCheck() {
    const word = document.querySelector(".input-text").value;
    // console.log(word)
    let length = word.length;
    //getting first half
    let startCheck = word.substring(0, Math.floor(length / 2)).toLowerCase();
    //getting last half
    let endCheck = word.substring(length - Math.floor(length / 2)).toLowerCase();
    //reverse endCheck
    let reverse = endCheck.split('').reverse().join('');
    // other way -> let reverse = [...end].reverse().join(''); 
    if (startCheck == reverse) {
        results.innerHTML = `"${word.toUpperCase()}" is a palindrome `;
        document.getElementById("form").value = '';
    } else {
        results.innerHTML = `"${word.toUpperCase()}" is NOT a palindrome `;
        document.getElementById("form").value = '';
    }
}