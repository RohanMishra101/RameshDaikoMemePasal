let updateBtn = document.getElementById("uploadBtn");
let popUp = document.getElementById("popUp-section");
let closePopUP = document.getElementById("closePopUp");
updateBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});

closePopUP.addEventListener("click", () => {
  popUp.style.display = "none";
});
