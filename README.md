# mvc-vanilla-js

# Daftar Tugas (To-Do List) dengan Vanilla JavaScript

Proyek ini adalah implementasi sederhana dari pola desain MVC (Model-View-Controller) menggunakan vanilla JavaScript. Ini menunjukkan cara memisahkan tanggung jawab dalam aplikasi web kecil.

## Struktur

```bash
mvc-vanilla-js/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── model.js
│   ├── view.js
│   └── controller.js
└── README.md
```

- `index.html`: File HTML utama yang berisi struktur dasar aplikasi.
- `css/styles.css`: File CSS untuk styling aplikasi.
- `js/model.js`: Komponen Model yang mengelola data dan logika bisnis.
- `js/view.js`: Komponen View yang menangani antarmuka pengguna dan interaksi pengguna.
- `js/controller.js`: Komponen Controller yang bertindak sebagai perantara antara Model dan View.

## Cara Kerjanya

### Model

Kelas `Model` bertanggung jawab untuk mengelola data tugas. Ia memiliki metode untuk menambah dan menghapus tugas serta memberi tahu controller ketika tugas berubah.

### View

Kelas `View` bertanggung jawab untuk merender antarmuka pengguna dan menangani input pengguna. Ia memiliki metode untuk mendapatkan teks tugas dari input, mereset input, dan menampilkan tugas-tugas. Ia juga mengikat event handler untuk menambah dan menghapus tugas.

### Controller

Kelas `Controller` menghubungkan Model dan View. Ia menangani penambahan dan penghapusan tugas dengan memperbarui Model dan memperbarui View ketika Model berubah.

## Menjalankan Proyek

1. Clone repository atau unduh file-file proyek.
2. Buka `index.html` di web browser.

## Penggunaan

- Masukkan tugas di bidang input dan klik tombol "Add Task" untuk menambahkan tugas baru ke daftar.
- Klik tombol "Delete" di samping tugas untuk menghapusnya dari daftar.

Proyek sederhana ini menunjukkan prinsip-prinsip dasar pola MVC dan bagaimana itu dapat diimplementasikan dalam vanilla JavaScript. Jangan ragu untuk mengembangkan proyek ini dengan menambahkan lebih banyak fitur atau memperbaiki kode yang ada.

## Warning 
- Mungkin saja kode di repository saya ada yang error, tugas kamu yang meng clone repository ini jika ada error silahkan troubleshooting yaa dan perbaiki kode tersebut.
