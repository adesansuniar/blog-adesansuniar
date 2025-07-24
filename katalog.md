---
layout: page
title: "Katalog Produk"
permalink: /katalog/
tags: [katalog, produk, fashion, handmade]
description: Kumpulan produk jahitan handmade seperti gamis batik, outer santai, dan seragam custom buatan Penjahit Alamanda.
---

## ✂️ Koleksi Produk Handmade

Temukan produk jahit eksklusif buatan Penjahit Alamanda yang bisa langsung dipesan atau dikustom sesuai kebutuhan:

---

{% for item in site.data.katalog %}
### 🧵 {{ item.name }}  
💸 **Harga:** Rp{{ item.price | divided_by: 1 | prepend: '' | replace: ".0", "" }}  
📌 **Deskripsi:** {{ item.desc }}  
👉 [Pesan via WhatsApp]({{ item.link }})
---

{% endfor %}

## 🎯 Catatan

- Semua produk dijahit oleh tim Penjahit Alamanda dengan standar presisi dan desain yang bisa disesuaikan.  
- Pembayaran bisa dilakukan setelah diskusi desain via WhatsApp.  
- Gambar produk akan segera ditampilkan dalam versi grid visual.

{% include schema-katalog.html %}
