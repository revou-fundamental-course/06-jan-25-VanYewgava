const userGreeting = document.getElementById("user-greeting");
let userName = prompt("Enter your name:", "User");
if (userName) userGreeting.textContent = userName;

document.forms["message-form"].addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah submit form secara default

  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name === "" || birthDate === "" || gender === "" || messages === "") {
    alert("Tidak boleh ada yang kosong!");
    return;
  }

  setSenderUI(name, birthDate, gender, messages);
});

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").textContent = name;
  document.getElementById("sender-birth-date").textContent = birthDate;
  document.getElementById("sender-gender").textContent = gender;
  document.getElementById("sender-messages").textContent = messages;
}

let indexBanner = 0;
changeBackground();

function nextBanner() {
  indexBanner += 1;
  changeBackground();
}

function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");
  console.log(bannerList.length);

  console.log(indexBanner);
  if (indexBanner > bannerList.length - 1) {
    //reset indexBanner
    indexBanner = 0;
  }

  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }
  bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);
