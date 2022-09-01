const count = document.querySelector(".count");
const input = document.querySelector(".form");


input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
})