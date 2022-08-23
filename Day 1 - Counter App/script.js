const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("add")) {
        console.log("add")
    }
})



// add.addEventListener("click", () => {
//     count.innerHTML++;
// })

// sub.addEventListener("click", () => {
//     count.innerHTML--;
// })

// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
// })