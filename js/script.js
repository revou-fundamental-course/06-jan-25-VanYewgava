// Ambil elemen greeting
const userGreeting = document.getElementById("user-greeting");

// Fungsi untuk menampilkan nama di website
function displayGreeting(name) {
  userGreeting.textContent = name || "Punten Mamang";
}

// Cek apakah nama sudah disimpan di Local Storage
let userName = localStorage.getItem("userName");

// Jika nama belum ada, minta pengguna memasukkan nama
if (!userName) {
  while (true) {
    userName = prompt("Masukkan nama panggilan Anda (tidak boleh kosong):");
    if (userName === null) {
      userName = "Punten Mamang"; // Fallback jika pengguna memilih "Batal"
      break;
    } else if (userName.trim() !== "") {
      userName = userName.trim();
      break;
    }
  }
  localStorage.setItem("userName", userName);
}

// Tunggu hingga DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Tampilkan nama di website
  displayGreeting(userName);

  // Validasi dan tampilkan pesan pada form submit
  document.forms["message-form"].addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.forms["message-form"]["full-name"].value.trim();
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const messages = document.forms["message-form"]["messages"].value.trim();

    if (!name || !birthDate || !gender || !messages) {
      alert("Tidak boleh ada yang kosong!");
      return;
    }

    setSenderUI(name, birthDate, gender.value, messages);
  });

  // Atur banner otomatis
  setInterval(nextBanner, 3000);
});

// Fungsi untuk menampilkan data pengirim
function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").textContent = name;
  document.getElementById("sender-birth-date").textContent = birthDate;
  document.getElementById("sender-gender").textContent = gender;
  document.getElementById("sender-messages").textContent = messages;
}

let indexBanner = 0;
function nextBanner() {
  indexBanner += 1;
  changeBackground();
}

function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");

  if (indexBanner > bannerList.length - 1) {
    indexBanner = 0; // Reset indexBanner
  }

  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }
  bannerList[indexBanner].style.display = "block";
}
