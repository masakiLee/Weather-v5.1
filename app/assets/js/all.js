// sideMenu
let menuIcon = document.querySelector(".menuIcon");
let sideMenuIcon = document.querySelector(".sideMenuIcon");
let sideMask = document.querySelector(".sideMask");
// login
let signIn = document.querySelector(".signIn");
let infoModal = document.querySelector("#infoModal");

//-------------------------------------------//

//sideMenu
menuIcon.addEventListener("click", function () {
  sideMask.style.display = "block";
});

sideMenuIcon.addEventListener("click", function () {
  sideMask.style.display = "none";
});

//loginModal
signIn.addEventListener("click", function () {
  infoModal.showModal();
});
