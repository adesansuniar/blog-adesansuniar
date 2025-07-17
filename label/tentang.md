---
layout: page
title: Label: Tentang
permalink: /label/tentang/
---

### Artikel dengan Label *Tentang*

{% for post in site.posts %}
  {% if post.tags contains "tentang" %}
  - [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}
