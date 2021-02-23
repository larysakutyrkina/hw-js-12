const images = document.querySelectorAll(".image-to-show");
const stopButton = document.querySelector(".stop");
const playButton = document.querySelector(".play");
let counter = 0;
let showImagesWithDelay;

function onClick() {
    document.addEventListener("click", event => {
        if (event.target.classList === stopButton.classList) {
            clearInterval(cycledSliderOn);
        }else if (event.target.classList === playButton.classList) {
            clearInterval(cycledSliderOn);
            showImages();
        }
});

function showImages() {
    cycledSliderOn = setInterval(() => {
    counter++;
        if (counter !== 0) {
            images[counter - 1].hidden = true;
        } if (counter / images.length === 1) {
            counter = 0;
}
    images[counter].hidden = false;
  }, 3000);
}
    showImages()
}
    onClick();
