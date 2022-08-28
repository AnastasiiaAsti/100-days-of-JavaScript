const btn = document.querySelector(".btn");
const results = document.querySelector(".results");
const word = document.querySelector(".input-text");


btn.addEventListener("click", countVowel);


function countVowel() {
    let vowelCount = 0;
    let wordValue = word.value;
    // console.log(wordValue)

    for (let i = 0; i < wordValue.length; i++) {
        let letter = wordValue[i];
        if (letter.match(/([a, e, i, o, u])/)) {
            vowelCount++;
        }
    }
    results.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`; 
}

