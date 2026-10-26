
let productImage = document.querySelector("#productImage");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let photoCount = document.querySelector("#photoCount");

let photos = [
  "./images/black.webp",
  "./images/blue.webp",
  "./images/purple.webp",
  "./images/black.webp"
];

let index = 0;

function showPhoto() {
  productImage.src = photos[index];
  photoCount.textContent = `Photo ${index + 1} of ${photos.length}`;
}
nextBtn.addEventListener("click", function () {
  index++;

  if (index >= photos.length) {
    index = 0;
  }

  showPhoto();
});
prevBtn.addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = photos.length - 1;
  }

  showPhoto();
});


let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let quantity = document.querySelector("#quantity");
let total = document.querySelector("#total");

let price = 52000;

plus.addEventListener("click", () => {
    quantity.value = Number(quantity.value) + 1;
    total.textContent = (quantity.value * price).toLocaleString("en-US");
});

minus.addEventListener("click", () => {
    if (quantity.value > 1) {
        quantity.value = Number(quantity.value) - 1;
        total.textContent = (quantity.value * price).toLocaleString("en-US");
    }
});