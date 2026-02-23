const checkBox = document.getElementById("checked");
const password = document.getElementById("password");
const bgDrop = document.getElementById("bg-drop");
const previewBtn = document.getElementById("preview-btn");
const signupButton = document.getElementById("signin-button");
const detailBox = document.getElementById("detail-box");
const signTitle = document.getElementById("sign-title");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    password.type = "text";
    // return;
  } else {
    password.type = "password";
    return;
  }
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  bgDrop.style.transform = "translateY(-150%)";
  setTimeout(() => {
    bgDrop.style.display = "none";
    signTitle.style.display = "block";
  }, 600); // match CSS transition time
});

previewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  detailBox.style.visibility = "visible";

  if ((previewBtn.textContent = "Preview")) {
    setTimeout(() => {
      previewBtn.textContent = "Reiew Courses";
    }, 5000);
    return;
  }

  if ((previewBtn.textContent = "Reiew Courses")) {
    setTimeout(() => {
      bgDrop.style.display = "block";
      bgDrop.style.transform = "translateY(0)";
      signTitle.style.display = "none";
    }, 3000);
  }
});
