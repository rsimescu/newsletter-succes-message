let mainContainer = document.querySelector(".mainContainer");
let afterSub = document.querySelector(".afterSub");
let input = document.querySelector("#input");
let firstButton = document.querySelector("#firstButton");
let afterButton = document.querySelector("#afterButton");
let errorMessage = document.querySelector(".errorMessage");
let email = document.querySelector("#email");

firstButton.addEventListener("click", () => {
  if (input.value === "" || input.validity.typeMismatch) {
    mainContainer.classList.remove("invisible");
    afterSub.classList.add("invisible");
    errorMessage.classList.remove("invisible");
    input.classList.add("inputError")
  } else {
    mainContainer.classList.add("invisible");
    afterSub.classList.remove("invisible");
    email.innerHTML = input.value + ". ";
  }
});

afterButton.addEventListener("click", () => {
  mainContainer.classList.remove("invisible");
  afterSub.classList.add("invisible");
  input.value= ""
});

input.addEventListener("input", () => {
  if (input.value != "") {
    errorMessage.classList.add("invisible");
    input.classList.remove("inputError")
  }
});
