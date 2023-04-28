const productImages = document.querySelectorAll(".productImage");
const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener("mouseover", function() {
    buttons[i].style.display = "block"; 
  });

  productImages[i].addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || !event.relatedTarget.closest(".productImage")) {
      buttons[i].style.display = "none";
    }
  });

  buttons[i].addEventListener("mouseover", function() {
    buttons[i].style.display = "block";
  });

  buttons[i].addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || !event.relatedTarget.closest(".productImage")) {
      buttons[i].style.display = "none";
    }
  });
}




// document
//   .querySelectorAll(".productImage")
//   .addEventListener("mouseover", showButton);
//   document
//   .querySelectorAll(".productImage")
//   .addEventListener("mouseout", hideButton);

// function showButton() {
//   document.querySelector(".btn").style.display = "initial";
// }
// function hideButton() {
//   document.querySelector(".btn").style.display = "none";
// }
