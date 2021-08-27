
const videoPlayer = document.getElementById("help-let-me-go")
const buttonToggle = document.getElementById("toggle")
buttonToggle.innerText = "Hide Video"
buttonToggle.className = "btn btn-outline-success"
let showVideo = true


const toggleVideo = () => {
    showVideo = !showVideo
    console.log(showVideo)
    if(!showVideo){
    videoPlayer.className += "hide"
    buttonToggle.innerText = "Show Video"
    buttonToggle.className = "btn btn-outline-danger"
    }
    else{
        videoPlayer.classList.remove("hide")
        buttonToggle.innerText = "Hide Video"
        buttonToggle.className = "btn btn-outline-success"
    }
}