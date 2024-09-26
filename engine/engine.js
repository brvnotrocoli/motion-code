window.addEventListener('targetFound', function () {
    var videoElement = document.getElementById("videoPlayer");
    videoElement.play();

    const cta = document.querySelector(".cta");
    cta.classList.add("show");
});

window.addEventListener('targetLost', function () {
    var videoElement = document.getElementById("videoPlayer");
    videoElement.load();
});

function init() {
    const splashScreenBox = document.querySelector(".splash-screen-box");
    splashScreenBox.classList.add("hide");
    splashScreenBox.addEventListener("transitionend", function () {
        splashScreenBox.remove();
    });
}