# UPJfund - Digital Crowdfunding Platform

UPJfund adalah antarmuka web (UI) platform penggalangan dana digital yang dibangun menggunakan HTML murni, CSS3, dan Vanilla JavaScript. Proyek ini berfokus pada desain responsif, manipulasi DOM (Document Object Model) untuk interaktivitas, dan arsitektur *frontend* tanpa bergantung pada *framework* eksternal.

## 📌 Fitur Utama

* **Landing Page Interaktif (`index.html`):** Memiliki *Hero Section* dengan navigasi *absolute*, daftar campaign terbaru, dan sistem *Accordion* FAQ interaktif yang dibangun murni tanpa JavaScript menggunakan tag `<details>` dan `<summary>`.
* **Katalog Campaign (`campaign.html`):** Dilengkapi dengan fitur pencarian *real-time*, filter pintar, dan pengurutan (Sort) nominal donasi tertinggi ke terendah secara dinamis menggunakan Vanilla JavaScript.
* **Detail Campaign (`campaign-detail.html`):** Halaman spesifik campaign yang memiliki sistem tabulasi dinamis (Deskripsi, Update, Comment) yang memungkinkan transisi konten yang mulus tanpa perlu memuat ulang (*reload*) halaman.
* **Fully Responsive:** Tata letak beradaptasi secara otomatis dari layar desktop, tablet, hingga perangkat *mobile* (smartphone) melalui penerapan Media Queries dan Flexbox/Grid modern.

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik halaman.
* **CSS3:** Penataan gaya, *custom properties* (variabel root), animasi CSS, dan tata letak Grid/Flexbox.
* **Vanilla JavaScript (ES6+):** Logika interaktif pada sisi klien (*client-side filtering, sorting, tab switching*).

## 📁 Struktur File

```text
📁 UPJfund-Project/
├── index.html              # Halaman Utama (Landing Page)
├── campaign.html           # Halaman Daftar Pencarian Campaign
├── campaign-detail.html    # Halaman Rincian & Tab Campaign
├── style.css               # Berkas StyleSheet Utama (Global & Komponen)
└── README.md               # Dokumentasi Proyek