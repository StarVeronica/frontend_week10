const image1 = "/Winter.jpg";
const image2 = "/Summer.jpg";

const galleryImage = document.getElementById("galleryImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImage = image1;

function changeNextImage() {
    galleryImage.src = image2;
};

function changePrevImage() {
    galleryImage.src = image1;
};

nextButton.addEventListener("click", () => {
    currentImage = image2;
    changeNextImage();
})

prevButton.addEventListener("click", () => {
    currentImage = image1;
    changePrevImage();
})
