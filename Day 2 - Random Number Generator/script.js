const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    //generate number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    //add random number to the DOM
    number.innerHTML = randomNumber;
}

btn.addEventListener("click", generateNumber);

generateNumber();

// console.log(rand)