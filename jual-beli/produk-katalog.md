---
layout: jual-beli
title: Katalog Produk Alamanda
permalink: /jual-beli/produk-katalog/
---
<section class="section-katalog">
  <h2>Daftar Produk</h2>
  <div class="produk-wrapper">
    {% for item in site.data.katalog %}
      <div class="produk-card">
        <img src="{{ item.gambar }}" alt="{{ item.nama }}">
        <h3>{{ item.nama }}</h3>
        <p>{{ item.deskripsi }}</p>
        <p class="harga">Rp {{ item.harga }}</p>
        <a href="/detail/{{ item.slug }}" class="btn-detail">Lihat Detail</a>
      </div>
    {% endfor %}
  </div>
</section>
