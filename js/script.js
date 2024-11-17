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

// fetch json data
fetch("/data/belajar_html5.json")
  .then((response) => response.json())
  .then((data) => {
    //  let listData = document.getElementById("list_data");

    //  data.forEach((item) => {
    //    let li = document.createElement("li");
    //    li.innerHTML = item.nama;
    //    listData.appendChild(li);
    //  });
   //  console.log(data);
    dt = {
      playlistId: data.items[0].snippet.playlistId,
      videoId: data.items[0].contentDetails.videoId,
      title: data.items[0].snippet.title,
      thumbnail: data.items[0].snippet.thumbnails.medium.url,
      description: data.items[0].snippet.description,
      channelTitle: data.items[0].snippet.channelTitle,
      publishedAt: data.items[0].snippet.publishedAt,
      link:
        "https://www.youtube.com/watch?v=" + data.items[0].contentDetails.videoId + "&list=" + data.items[0].snippet.playlistId,
    };
    console.log(dt);
  });
