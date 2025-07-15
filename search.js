// search.js
async function searchPosts() {
  const res = await fetch('{{ "/search.json" | relative_url }}');
  const posts = await res.json();

  const input = document.getElementById('search-input');
  const resultsList = document.getElementById('results-list');

  input.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    resultsList.innerHTML = '';

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );

    filtered.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${post.url}">${post.title}</a><br><small>${post.date}</small>`;
      resultsList.appendChild(li);
    });
  });
}

searchPosts();
---
layout: none
---

[
  {% for post in site.posts %}
  {
    "title": {{ post.title | jsonify }},
    "url": {{ post.url | absolute_url | jsonify }},
    "date": "{{ post.date | date: "%d %B %Y" }}",
    "content": {{ post.content | strip_html | strip_newlines | jsonify }}
  } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
