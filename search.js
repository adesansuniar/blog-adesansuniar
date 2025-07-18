async function searchPosts() {
  const res = await fetch('{{ "/search.json" | relative_url }}');
  const posts = await res.json();

  const input = document.getElementById('search-input');
  const resultsList = document.getElementById('results-list');

  input.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    resultsList.innerHTML = '';

    if (query.length < 2) return;

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) ||
      (post.categories && post.categories.some(cat => cat.toLowerCase().includes(query)))
    );

    if (filtered.length === 0) {
      resultsList.innerHTML = "<li>Tidak ditemukan hasil pencarian.</li>";
      return;
    }

    filtered.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${post.url}">${post.title}</a><br>
        <small>${post.date}</small><br>
        <span style="font-size: 0.85em; color: #666;">${post.description}</span><br>
        <span style="font-size: 0.75em; color: #999;">
          🏷️ ${post.tags?.join(', ') || ''} |
          📂 ${post.categories?.join(', ') || ''}
        </span>
        <hr>
      `;
      resultsList.appendChild(li);
    });
  });
}

searchPosts();
