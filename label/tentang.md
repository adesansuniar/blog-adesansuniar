---
layout: page
title: "Tentang"
permalink: /label/tentang/
description: "Artikel dengan label Tentang: cerita di balik brand, visi usaha, dan profil Penjahit Alamanda."
lang: "id"
locale: "id_ID"
---

<main role="main" itemscope itemtype="https://schema.org/CollectionPage"
      style="max-width: 960px; margin: auto; padding: 20px; line-height: 1.7;">
  
  <h1 style="text-align: center; margin-bottom: 20px;">{{ page.title }}</h1>

  <p style="text-align: center; font-size: 1em; color: #555;">
    Jelajahi artikel yang membahas latar belakang usaha, profil penulis, dan filosofi di balik blog Penjahit Alamanda.
  </p>

  <ul style="list-style: none; margin-top: 30px; padding: 0;">
    {% assign tentang_posts = site.posts | where_exp: "p", "p.tags contains 'tentang'" %}
    {% for post in tentang_posts %}
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

  {% if tentang_posts.size == 0 %}
    <p style="text-align: center; color: #888;">Belum ada artikel dengan tag “tentang”.</p>
  {% endif %}

</main>
