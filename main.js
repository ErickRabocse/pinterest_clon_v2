const image_box = document.querySelector(".main__card_img_box");
const image_cover = document.querySelector(".main__card_img_cover");
const image = document.querySelector(".main__card_img");

function showDisplayCover() {
  image_cover.style.opacity = "1";
  image.style.filter = "brightness(60%)";
}

function hideDisplayCover() {
  image_cover.style.opacity = "0";
  image.style.filter = "brightness(100%)";
}

image_box.addEventListener("mouseover", showDisplayCover);
image_box.addEventListener("mouseout", hideDisplayCover);

// for (var i = 0; i < image_box.length; i++) {
//   image_box[i].addEventListener("click", function () {
//     // Get the index of the clicked element in the array
//     var index = Array.prototype.indexOf.call(image_box, this);
//     console.log("Index of clicked image box: " + index);
//   });
// }
