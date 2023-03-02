const image_box = document.querySelector(".main__card_img_box");
const image_cover = document.querySelector(".main__card_img_cover");
const image = document.querySelector(".main__card_img");

function showDisplayCover() {
  image_cover.style.marginLeft = "0";
  image.style.filter = "brightness(60%)";
}

function hideDisplayCover() {
  image_cover.style.marginLeft = "1000px";
  image.style.filter = "brightness(100%)";
}

image_box.addEventListener("mouseover", showDisplayCover);
image_box.addEventListener("mouseout", hideDisplayCover);

// image_box.forEach((el) => {
//   el.addEventListener("mouseover", showDisplayCover);
//   el.addEventListener("mouseout", hideDisplayCover);
// });
