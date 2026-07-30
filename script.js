document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1. Hapus status 'active' dari semua tombol tab
      tabBtns.forEach((b) => b.classList.remove("active"));

      // 2. Hapus status 'active' dari semua panel konten
      tabPanes.forEach((p) => p.classList.remove("active"));

      // 3. Tambahkan status 'active' pada tombol yang baru saja diklik
      btn.classList.add("active");

      // 4. Ambil ID target dari atribut data-target
      const targetId = btn.getAttribute("data-target");

      // 5. Tampilkan panel konten yang sesuai dengan target ID
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil elemen-elemen yang dibutuhkan dari DOM
  const searchInput = document.querySelector(".search-box input");
  const sortBtn = document.querySelector('button[aria-label="Sort"]');
  const filterBtn = document.querySelector('button[aria-label="Filter"]');
  const grid = document.querySelector(".campaign-grid");

  // Ubah NodeList kartu menjadi Array agar bisa menggunakan fungsi sort()
  let cards = Array.from(grid.querySelectorAll(".card"));

  // 2. Buat "State" (kondisi saat ini) untuk menyimpan status pencarian, filter, dan sort
  let state = {
    searchQuery: "",
    sortDesc: true, // true = nominal tertinggi ke terendah, false = sebaliknya
    filterUrgent: false, // true = hanya tampilkan yang progressnya di atas 70%
  };

  // 3. Fungsi Utama untuk merender ulang kartu berdasarkan State
  function updateView() {
    // A. Urutkan Kartu (Sort)
    cards.sort((a, b) => {
      // Ambil teks nominal, bersihkan dari huruf/titik, ubah jadi angka murni
      const textA = a
        .querySelector(".progress-amount")
        .textContent.replace(/\D/g, "");
      const textB = b
        .querySelector(".progress-amount")
        .textContent.replace(/\D/g, "");
      const valA = parseInt(textA);
      const valB = parseInt(textB);

      // Logika pengurutan
      return state.sortDesc ? valB - valA : valA - valB;
    });

    // B. Filter, Search & Tampilkan ke Layar
    cards.forEach((card) => {
      // Ambil judul kartu
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      // Ambil persentase progress (contoh: dari "75%" diambil angka 75)
      const progress = parseInt(
        card.querySelector(".progress-fill").style.width,
      );

      // Cek apakah kartu cocok dengan kata kunci pencarian
      const matchSearch = title.includes(state.searchQuery);
      // Cek apakah kartu cocok dengan filter (jika filter aktif, harus > 70%)
      const matchFilter = state.filterUrgent ? progress >= 70 : true;

      // Jika cocok keduanya, tampilkan. Jika tidak, sembunyikan.
      if (matchSearch && matchFilter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

      // Kembalikan kartu ke dalam grid HTML (ini otomatis menyusun ulang posisinya)
      grid.appendChild(card);
    });
  }

  // 4. Pasang Event Listener (Pemicu Aksi)

  // Aksi saat user mengetik di kolom pencarian
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    updateView();
  });

  // Aksi saat user klik tombol Sort (Bolak-balik nominal tertinggi/terendah)
  sortBtn.addEventListener("click", () => {
    state.sortDesc = !state.sortDesc; // Balikkan status
    updateView();

    // Sedikit efek visual pada tombol saat diklik
    sortBtn.style.border = state.sortDesc ? "none" : "2px solid #1abc9c";
  });

  // Aksi saat user klik tombol Filter (Simulasi: Tampilkan hanya campaign yang "Hampir Terkumpul" >70%)
  filterBtn.addEventListener("click", () => {
    state.filterUrgent = !state.filterUrgent; // Balikkan status
    updateView();

    // Sedikit efek visual pada tombol saat filter aktif
    const svg = filterBtn.querySelector("svg");
    if (state.filterUrgent) {
      filterBtn.style.backgroundColor = "#1abc9c";
      svg.style.stroke = "#ffffff";
    } else {
      filterBtn.style.backgroundColor = "#ffffff";
      svg.style.stroke = "#666666";
    }
  });

  // Jalankan satu kali saat halaman pertama kali dimuat
  updateView();
});
