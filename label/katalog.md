---
layout: page
title: "Label: Katalog"
permalink: /label/katalog/
description: "Kumpulan artikel katalog busana, produk unggulan, dan inspirasi menjahit dari Penjahit Alamanda."
lang: "id"
locale: "id_ID"
---

<main role="main" itemscope itemtype="https://schema.org/CollectionPage"
      style="max-width: 960px; margin: auto; padding: 20px; line-height: 1.7;">
  
  <h1 style="text-align: center; margin-bottom: 20px;">{{ page.title }}</h1>

  <p style="text-align: center; font-size: 1em; color: #555;">
    Halaman ini berisi kumpulan artikel dengan label <strong>Katalog</strong>, berisi inspirasi busana, desain produk, dan koleksi unggulan dari blog Penjahit Alamanda.
  </p>

  <ul style="list-style: none; padding: 0; margin-top: 30px;">
    {% assign katalog_posts = site.posts | where_exp: "p", "p.tags contains 'katalog'" %}
    {% for post in katalog_posts %}
      <li style="margin-bottom: 25px;">
        <a href="{{ post.url | relative_url }}" style="font-size: 1.1em; font-weight: bold; color: #0077cc;">
          {{ post.title }}
        </a><br>
        <span style="font-size: 0.9em; color: #666;">{{ post.date | date: "%d %B %Y" }}</span><br>
        {% if post.excerpt %}
          <span style="font-size: 0.95em; color: #333;">
            {{ post.excerpt | strip_html | truncate: 120 }}
          </span>
        {% endif %}
      </li>
    {% endfor %}
  </ul>

  {% if katalog_posts.size == 0 %}
    <p style="text-align: center; color: #888;">Belum ada artikel dengan tag “katalog” yang dipublikasikan.</p>
  {% endif %}

</main>
