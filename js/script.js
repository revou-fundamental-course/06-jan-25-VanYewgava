// Menyapa pengguna dengan nama yang dimasukkan
const userGreeting = document.getElementById("user-greeting");
let userName = prompt("Enter your name:", "User"); // Meminta input nama pengguna
if (userName) userGreeting.textContent = userName; // Menampilkan nama pengguna di elemen dengan ID "user-greeting"

// Menambahkan event listener untuk form saat disubmit
document.forms["message-form"].addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  // Mengambil nilai dari input form
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  // Mengecek apakah ada field yang kosong
  if (name === "" || birthDate === "" || gender === "" || messages === "") {
    alert("Tidak boleh ada yang kosong!"); // Memberikan peringatan jika ada field yang kosong
    return;
  }

  // Mengupdate UI dengan data yang sudah dimasukkan
  setSenderUI(name, birthDate, gender, messages);
});

// Fungsi untuk menampilkan data yang dimasukkan pengguna
function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").textContent = name;
  document.getElementById("sender-birth-date").textContent = birthDate;
  document.getElementById("sender-gender").textContent = gender;
  document.getElementById("sender-messages").textContent = messages;
}

// Variabel untuk mengatur banner
let indexBanner = 0;
changeBackground(); // Menjalankan fungsi untuk mengubah background banner

// Fungsi untuk mengganti ke banner berikutnya
function nextBanner() {
  indexBanner += 1;
  changeBackground(); // Mengubah background banner berdasarkan index
}

// Fungsi untuk mengganti background banner sesuai index
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image"); // Mendapatkan semua elemen banner
  console.log(bannerList.length); // Menampilkan jumlah banner yang ada

  console.log(indexBanner); // Menampilkan index banner yang sedang aktif
  if (indexBanner > bannerList.length - 1) {
    // Jika index lebih besar dari jumlah banner, reset ke 0
    indexBanner = 0;
  }

  // Menyembunyikan semua banner
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  // Menampilkan banner yang sesuai dengan index
  bannerList[indexBanner].style.display = "block";
}

// Mengubah banner setiap 3 detik (3000 milidetik)
setInterval(nextBanner, 3000);
