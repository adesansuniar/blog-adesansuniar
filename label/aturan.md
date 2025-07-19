---
layout: page
title: "Label: Aturan"
permalink: /label/aturan/
description: "Kumpulan artikel bertema aturan, etika bisnis keluarga, dan pedoman praktis agar usaha berjalan tertib dan profesional."
lang: "id"
locale: "id_ID"
---

<main role="main" itemscope itemtype="https://schema.org/CollectionPage"
      style="max-width: 960px; margin: auto; padding: 20px; line-height: 1.7; text-align: justify;">
  
  <h1 style="text-align: center; margin-bottom: 20px;">{{ page.title }}</h1>

  <p style="text-align: center; font-size: 1em; color: #666;">
    Halaman ini menghimpun konten seputar <strong>aturan dan etika usaha</strong> yang relevan untuk keluarga, tim kerja, maupun pembaca yang ingin membangun usaha yang tertib dan harmonis.
  </p>

  <hr style="margin: 30px 0;">

  <ul style="list-style: none; padding: 0;">
    {% assign aturan_posts = site.posts | where_exp: "post", "post.tags contains 'aturan'" %}
    {% for post in aturan_posts %}
      <li style="margin-bottom: 20px;">
        <a href="{{ post.url | relative_url }}" style="font-weight: bold; font-size: 1.1em; color: #0077cc;">
          {{ post.title }}
        </a><br>
        <span style="font-size: 0.9em; color: #555;">{{ post.date | date: "%d %B %Y" }}</span><br>
        <span style="font-size: 0.95em; color: #333;">{{ post.excerpt | strip_html | truncate: 120 }}</span>
      </li>
    {% endfor %}
  </ul>

  {% if aturan_posts.size == 0 %}
    <p style="color: #777; text-align: center;">Belum ada artikel bertag "aturan" yang dipublikasikan.</p>
  {% endif %}
</main>
