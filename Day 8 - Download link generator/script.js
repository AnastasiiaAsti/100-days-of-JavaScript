//create valiables
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");


btn.addEventListener('click', generateLink);

function generateLink(e) {
    e.preventDefault();
    // console.log(glink.value)
    const copy = document.querySelector('.copy')
    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes('https://drive.google.com/file/d/');
    // console.log(confirmLink)
    if (confirmLink == true) {
        const getDownloadLink = gLinkValue.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=").replace("/view?usp=sharing", "");
        // console.log(getDownloadLink)
        downloadLink.value = getDownloadLink;

        function copyText(target) {
            if (target.value === "") {
                alert("Please generate a link")
            } else {
                target.select();
                document.execCommand('copy');
                copy.innerHTML = 'COPIED!';
            }
        }
        copy.addEventListener('click', () => {
            return copyText(downloadLink);
        })
    }
}
