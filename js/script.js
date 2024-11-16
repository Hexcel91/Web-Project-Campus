let nama = localStorage.getItem("nama");

if (nama === null) {
  document.getElementById("popup_awal").style.display = "block";
  document.getElementById("welcome_text").style.display = "none";
  console.log("Anda belum menginput nama");
} else {
  document.getElementById("welcome_text").style.display = "block";
  document.getElementById("nama_hasil").innerHTML = nama;
}

// ketika mengenter di bagian input nama, nama akan disimpan di local storage, dan halaman akan di refresh
document
  .getElementById("inputNama")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleNama();
    }
  });
function handleNama() {
  let nama = document.getElementById("inputNama");

  // menghilangkan karakter jahat
  let namaValid = nama.value.replace(/[^A-Za-z ]/g, "");
  localStorage.setItem("nama", namaValid);

  window.location.reload();
}
