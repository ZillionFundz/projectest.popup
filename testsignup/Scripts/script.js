const checkBox = document.getElementById("checked");
const password = document.getElementById("password");
const bgDrop = document.getElementById("bg-drop");
const submitBtn = document.getElementById("submit-btn");
const signinButton = document.getElementById("signin-button");
const detailBox = document.getElementById("detail-box");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    password.type = "text";
    // return;
  } else {
    password.type = "password";
    return;
  }
});

signinButton.addEventListener("click", (e) => {
  e.preventDefault();
  bgDrop.style.transform = "translateY(-150%)";
  // bgDrop.classList.add = "hidden";
  setTimeout(() => {
    bgDrop.style.display = "none";
  }, 600); // match CSS transition time
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  detailBox.style.visibility = "visible";
});
