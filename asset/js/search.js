document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search-input");
  const resultsList = document.getElementById("results-list");
  let posts = [];

  // 🔄 Fetch data JSON
  fetch("/search.json")
    .then(res => res.json())
    .then(data => {
      posts = data;
    })
    .catch(() => {
      resultsList.innerHTML = "<li style='color:red;'>Gagal memuat data pencarian.</li>";
    });

  // 🔎 Proses pencarian
  function tampilkanHasil(query) {
    resultsList.innerHTML = "";

    if (query.length < 2) return;

    const filtered = posts.filter(post =>
      post.title?.toLowerCase().includes(query) ||
      post.description?.toLowerCase().includes(query) ||
      post.content?.toLowerCase().includes(query) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) ||
      (post.categories && post.categories.some(cat => cat.toLowerCase().includes(query)))
    );

    const sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sorted.length === 0) {
      resultsList.innerHTML = "<li>🔍 Tidak ditemukan hasil pencarian.</li>";
      return;
    }

    sorted.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${post.url}">${post.title}</a><br>
        <small>${post.date}</small><br>
        <span style="font-size: 0.85em; color: #666;">${post.description}</span><br>
        <span style="font-size: 0.75em; color: #999;">
          🏷️ ${post.tags?.join(', ') || '–'} |
          📂 ${post.categories?.join(', ') || '–'}
        </span>
        <hr>
      `;
      resultsList.appendChild(li);
    });
  }

  // ⏱️ Debounce input
  let debounce;
  searchBox.addEventListener("input", function () {
    clearTimeout(debounce);
    const query = this.value.toLowerCase().trim();
    debounce = setTimeout(() => {
      tampilkanHasil(query);
    }, 300);
  });
});
