const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const warning = document.querySelector(".warning");
const gilaki = document.querySelector(".request-text");

email.addEventListener("input", () => {
  if (regex.test(email.value)) {
    console.log(email.value);
    warning.style.display = "none";
  } else {
    warning.style.display = "block";
  }
});
