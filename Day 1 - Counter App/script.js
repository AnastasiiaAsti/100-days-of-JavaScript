const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("add")) {
        count.innerHTML++;
        setColor()
    }
    if (evt.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor()
    }
    if (evt.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor()
    }
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
}