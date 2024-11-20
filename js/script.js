let nama = localStorage.getItem("nama");

if (nama === null) {
  document.getElementById("popup_awal").style.display = "block";
  document.getElementById("welcome_text").style.display = "none";
  // console.log("Anda belum menginput nama");
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

// daftar pelatihan-1
fetch("/data/belajar_html5.json")
  .then((response) => response.json())
  .then((data) => {
    let pelatihanCarousel = document.getElementById("pelatihan-1");

    // Memeriksa data yang sudah ada di localStorage
    let storedData = JSON.parse(localStorage.getItem("pelatihan-1"));
    let currentDate = new Date();

    // Menambahkan tanggal saat ini ke data baru
    data.tanggal = currentDate.toISOString().split("T")[0];

    // Logika untuk memutuskan apakah perlu memperbarui data
    let shouldUpdateData = false;

    if (storedData === null) {
      // Jika belum ada data di localStorage
      shouldUpdateData = true;
    } else if (storedData.tanggal) {
      // Jika ada data dan tanggal, periksa apakah sudah lebih dari seminggu
      let storedDate = new Date(storedData.tanggal);
      if (
        currentDate.getTime() - storedDate.getTime() >
        7 * 24 * 60 * 60 * 1000
      ) {
        shouldUpdateData = true;
      }
    } else {
      // Jika ada data tapi tidak ada tanggal, update untuk menambahkan tanggal
      shouldUpdateData = true;
    }

    // Memperbarui data jika diperlukan
    if (shouldUpdateData) {
      localStorage.setItem("pelatihan-1", JSON.stringify(data));
      storedData = data;
    }

    // Menggunakan data yang tersimpan
    // console.log(storedData);

    let items = storedData.items; // Asumsikan data YouTube disimpan dalam properti 'items'

    // Menentukan jumlah card per slide
    const cardsPerSlide = 4;

    // Kode untuk membuat slides ...
    // (sisa kode Anda tetap sama)
    for (let i = 0; i < items.length; i += cardsPerSlide) {
      let slideContent = `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-2">
      `;

      // Menambahkan card ke slide
      for (let j = i; j < i + cardsPerSlide && j < items.length; j++) {
        const videoId =
          items[j].snippet.resourceId?.videoId || items[j].id?.videoId;
        const channelId = items[j].snippet.channelId;
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}&channel=${channelId}`;

        slideContent += `
          <div class="col">
            <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
              <div class="card h-100">
                <img src="${items[j].snippet.thumbnails.high.url}" class="card-img-top" alt="${items[j].snippet.title}">
                <div class="card-body">
                  <h5 class="card-title">${items[j].snippet.title}</h5>
                </div>
              </div>
            </a>
          </div>
        `;
      }

      slideContent += `
          </div>
        </div>
      `;

      pelatihanCarousel.innerHTML += slideContent;
    }

    // Initialize the carousel
    new bootstrap.Carousel(document.querySelector("#pelatihanCarousel"), {
      interval: 5000,
      wrap: true,
    });
  });

// Membuat slides
