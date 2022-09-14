const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");


async function connectionStatus() {
    try {
    } catch (error) {
        statusDisplay.textContent = "OOOOPSS!! Your Internet connection is down";
        bgColor.classList.remove("online");
    }
}

setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are ONLINE! Connection looks good";
        bgColor.classList.add(".online");
    }
}, 5000);


window.addEventListener("load", (evt) => {
    if (connectionStatus()) {
        statusDisplay.textContent = "You are ONLINE!";
    } else {
        statusDisplay.textContent = "You are OFFLINE!";
    }
})

        // window.addEventListener("offline", (evt) => {
        //     const statusDisplay = document.getElementById("status");
        //     statusDisplay.textContent = "Offline";
        // })

        // window.addEventListener("online", (evt) => {
        //     const statusDisplay = document.getElementById("status");
        //     section.classList.add(".online");
        //     statusDisplay.textContent = "Online";
        // })