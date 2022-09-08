const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
    bgColor.classList.add("online")
}

async function connectionStatus() {
    try {
        setColor();
        return fetchRe
    } catch (error) {
        statusDisplay.textContent = "OOOOPSS!! Your Internet connection is down";
        bgColor.classList.remove("online");
    }
}

setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are ONLINE! Connection looks good";
        setColor();
    }
}, 5000);


        // window.addEventListener("load", (evt) => {
        //     const statusDisplay = document.getElementById("status");
        //     statusDisplay.textContent = navigator.online ? "Online" : "Offline";
        // })

        // window.addEventListener("offline", (evt) => {
        //     const statusDisplay = document.getElementById("status");
        //     statusDisplay.textContent = "Offline";
        // })

        // window.addEventListener("online", (evt) => {
        //     const statusDisplay = document.getElementById("status");
        //     section.classList.add(".online");
        //     statusDisplay.textContent = "Online";
        // })