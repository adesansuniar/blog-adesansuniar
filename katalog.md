---
layout: page
title: Katalog Produk
permalink: /katalog/
tags: [katalog, produk, fashion, handmade]
description: Kumpulan produk jahitan handmade seperti gamis batik, outer santai, dan seragam custom buatan Penjahit Alamanda.
---

## ✂️ Koleksi Produk Handmade

Temukan produk jahit eksklusif buatan Penjahit Alamanda yang bisa langsung dipesan atau dikustom sesuai kebutuhan:

---

### 🧵 Gamis Batik Outdoor  
💸 **Harga:** Rp250.000  
📌 **Deskripsi:** Gamis kasual berbahan batik parang kombinasi katun, cocok untuk aktivitas luar ruang.  
👉 [Pesan via WhatsApp](https://wa.me/6288801758800)

---

### 🧣 Outer Ringan Motif Batik  
💸 **Harga:** Rp180.000  
📌 **Deskripsi:** Outer layer santai berbahan batik halus, cocok dipadukan dengan kaos polos.  
👉 [Pesan via WhatsApp](https://wa.me/6288801758800)

---

### 🏫 Seragam Sekolah SMA Custom  
💸 **Harga:** Rp160.000 / stel  
📌 **Deskripsi:** Seragam jahitan rapi dan presisi, bisa request nama bordir.  
👉 [Pesan via WhatsApp](https://wa.me/6288801758800)

---

### 🎨 Request Desain Khusus  
💬 Ingin produk yang lebih personal atau sesuai acara khusus?  
👉 [Klik untuk Konsultasi Gratis](https://wa.me/6288801758800)

---

## 🎯 Catatan

- Semua produk dijahit oleh tim Penjahit Alamanda dengan standar presisi dan desain yang bisa disesuaikan.  
- Pembayaran bisa dilakukan setelah diskusi desain via WhatsApp.  
- Gambar produk akan segera ditampilkan dalam versi grid visual.
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Katalog Busana Penjahit Alamanda",
  "description": "Kumpulan artikel katalog produk unggulan dan inspirasi menjahit.",
  "url": "{{ page.url | absolute_url }}",
  "inLanguage": "id-ID",
  "numberOfItems": {{ katalog_posts.size }},
  "itemListElement": [
    {% assign katalog_posts = site.posts | where_exp: "p", "p.tags contains 'katalog'" %}
    {% for post in katalog_posts %}
    {
      "@type": "ListItem",
      "position": {{ forloop.index }},
      "url": "{{ post.url | absolute_url }}",
      "name": "{{ post.title | strip_newlines | strip | escape }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
