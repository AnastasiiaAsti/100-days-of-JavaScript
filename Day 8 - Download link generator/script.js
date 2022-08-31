//create valiables
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const copy = document.querySelector('.copy');
const copyAudio = document.querySelector(".copy-audio");
const copyVideo = document.querySelector(".copy-video");



btn.addEventListener('click', generateLink);

function generateLink(e) {
    e.preventDefault();
    // console.log(glink.value)

    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes('https://drive.google.com/file/d/');
    // console.log(confirmLink)
    if (confirmLink === true) {
        const getDownloadLink = gLinkValue.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=").replace("/view?usp=sharing", "");
        // console.log(getDownloadLink)
        downloadLink.value = getDownloadLink;
        gLink.value = "";


        function copyText(target) {
            if (target.value === "") {
                alert("Please generate a link")
            } else {
                target.select();
                document.execCommand('copy');

            }
        }
        copy.addEventListener('click', () => {
            copy.innerHTML = 'COPIED!';
            return copyText(downloadLink);
        })

        //Embed audio function
        const audioStart = '<audio width="300" height="32" controls="controls" src="'; 
        const audioEnd = '" type="audio/mp3"></audio>';
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = `${audioStart}${downloadLink.value}${audioEnd}`;

        //copy audio
        copyAudio.addEventListener("click", () => {
            copyAudio.innerHTML = 'COPIED!';
            return copyText(embedAudio);
        })

        //Embed video function
        const getVideoLink = gLinkValue.replace("/video?usp=sharing", "");
        const videoStart = '<iframe src="';
        const videoEnd = '/preview" width="560" height="315"></iframe>';
        const embedVideo = document.getElementById("embed-video");
        embedVideo.value = `${videoStart}${getVideoLink}${videoEnd}`;

        //copy video
        copyVideo.addEventListener("click", () => {
            copyVideo.innerHTML = 'COPIED!';
            return copyText(embedVideo);
        })
    } else {
        downloadLink.innerHTML = "Please add a valid Google Drive Link ;)"
        gLink.value = "";
    }
}


