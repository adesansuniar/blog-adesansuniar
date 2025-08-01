git add search.html search.json daftar-artikel-filter.html
git commit -m "Integrasi ulang search.json & search.html dengan daftar-artikel-filter; dukung pencarian dan filter interaktif"
## [Tanggal Rilis] - 2025-08-01
### Diperbarui
- Integrasi ulang `search.html` dan `search.json` agar sinkron dengan `daftar-artikel-filter.html`
- Mendukung pencarian dinamis berbasis live filter: judul, kategori, dan tag
- Validasi struktur JSON agar kompatibel dengan modul pencarian interaktif
- Perbaikan layout agar responsif dan modular sesuai navigasi terbaru

### Repositori
Commit: `Integrasi ulang search.json & search.html dengan daftar-artikel-filter; dukung pencarian dan filter interaktif`
Files: `search.html`, `search.json`, `daftar-artikel-filter.html`
### Kontributor
- @adesansuniar (Audit, refactor, validasi JSON & layout)

### Impact
- Meningkatkan UX pencarian dan filter
- Menurunkan potensi error parsing JSON
- Memudahkan adopsi struktur oleh proyek serupa
