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
fetch('{{ "/search.json" | relative_url }}')
  .then(res => res.json())
  .then(data => { posts = data; })
  .catch(() => {
    resultsList.innerHTML = "<li style='color:red;'>Gagal memuat data pencarian.</li>";
  });
let debounce;
input.addEventListener('input', function () {
  clearTimeout(debounce);
  const query = this.value.toLowerCase().trim();
  debounce = setTimeout(() => {
    resultsList.innerHTML = '';
    if (query.length >= 2) { /* proses filter */ }
  }, 300);
});
[
  {
    "title": "Tips Menjahit Lurus Tanpa Garis",
    "url": "/2025/07/19/tips-menjahit-lurus.html",
    "description": "Cara menjahit lurus tanpa bantuan garis, cocok untuk pemula.",
    "content": "Menjahit lurus tanpa bantuan garis bisa dilatih dengan teknik sederhana...",
    "tags": ["tips", "menjahit", "pemula"],
    "categories": ["tutorial", "skill"],
    "date": "19 Juli 2025"
  },
  {
    "title": "Katalog Outer Batik Handmade",
    "url": "/2025/07/14/katalog-outer-batik.html",
    "description": "Koleksi outer batik eksklusif dari Penjahit Alamanda, tersedia dalam berbagai ukuran.",
    "content": "Outer batik kami didesain dengan sentuhan etnik dan modern...",
    "tags": ["katalog", "fashion", "batik"],
    "categories": ["produk", "koleksi"],
    "date": "14 Juli 2025"
  },
  {
    "title": "Etika Usaha Keluarga Jahit",
    "url": "/2025/06/30/etika-usaha-keluarga.html",
    "description": "Prinsip komunikasi, tanggung jawab, dan profesionalitas dalam bisnis menjahit keluarga.",
    "content": "Usaha keluarga seringkali menghadapi tantangan komunikasi dan peran kerja...",
    "tags": ["aturan", "etika", "keluarga"],
    "categories": ["manajemen", "inspirasi"],
    "date": "30 Juni 2025"
  }
]

searchPosts();
