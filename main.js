const image_box = document.querySelector(".main__card_img_box");
const image = document.querySelector(".main__card_img");
const image_cover_html = `<section class="main__card_img_cover">
  <div class="main__card_img_cover_top">
    <span class="main__card_img_cover_board"
      >board
      <i
        class="fa-solid fa-chevron-down main__card_img_cover_board_arrow"
      ></i>
    </span>
    <button class="main__card_img_cover_save">Save</button>
  </div>
  <div class="main__card_img_cover_bottom">
    <button class="main__card_img_cover_link">
      <img
        src="./images/up-right-arrow.png"
        alt="arrow up wight"
        width="20px"
      />
      website.com
    </button>
    <div class="main__card_img_cover_bottom_buttons">
      <button class="main__card_img_cover_send">
        <img src="./images/send.png" alt="send icon" width="20px" />
      </button>
      <button class="main__card_img_cover_more">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
    </div>
  </div>
</section>
`;

image_box.insertAdjacentHTML("beforeend", image_cover_html);
const image_cover = document.querySelector(".main__card_img_cover");

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

//FINDING THE INDEX OF AN ELEMENT
// for (var i = 0; i < image.length; i++) {
//   image[i].addEventListener("click", function () {
//     // Get the index of the clicked element in the array
//     var index = Array.prototype.indexOf.call(image, this);
//     console.log("Index of clicked image box: " + index);
//   });
// }
