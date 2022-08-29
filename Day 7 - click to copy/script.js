const btn = document.querySelector(".btn");
const code = document.querySelector(".code");

const copyText = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(code.value)
        .then(() => {
            btn.innerHTML = '&#9989;';
            setTimeout(() => {
                btn.textContent = "COPY!"
        
            }, 3000);
        })

    // code.select();
    // code.setSelectionRange(0, 999);
    // document.execCommand("copy");
//     btn.textContent = "Copied!";
//     setTimeout(() => {
//         btn.textContent = "COPY!"

//     }, 3000);
};

btn.addEventListener('click', copyText);
