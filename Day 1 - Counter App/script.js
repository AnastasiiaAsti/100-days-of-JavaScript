const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("add")) {
        count.innerHTML++;
    }
    if (evt.target.classList.contains("subtract")) {
        count.innerHTML--;
    }
    if (evt.target.classList.contains("reset")) {
        count.innerHTML = 0;
    }
})

