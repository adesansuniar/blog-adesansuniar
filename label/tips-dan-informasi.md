---
layout: page
title: "Tips dan Informasi"
permalink: /label/tips-dan-informasi/
description: "Artikel pilihan seputar tips praktis, edukasi menjahit, dan informasi inspiratif dari blog Penjahit Alamanda."
lang: "id"
locale: "id_ID"
---

<main role="main" itemscope itemtype="https://schema.org/CollectionPage"
      style="max-width: 960px; margin: auto; padding: 20px; line-height: 1.7;">

  <h1 style="text-align: center; margin-bottom: 20px;">{{ page.title }}</h1>

  <ul style="list-style: none; padding: 0;">
    {% assign tips_posts = site.posts | where_exp: "p", "p.tags contains 'tips-dan-informasi'" %}
    {% for post in tips_posts %}
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

  {% if tips_posts.size == 0 %}
    <p style="text-align: center; color: #777;">Belum ada artikel dengan tag “tips-dan-informasi”.</p>
  {% endif %}

</main>
