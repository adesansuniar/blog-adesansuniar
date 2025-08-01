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
        const CACHE_KEY = "searchData";
const CACHE_EXPIRY = 3600 * 1000; // 1 jam

function isCacheValid() {
  const cachedTime = localStorage.getItem("searchTime");
  if (!cachedTime) return false;
  return Date.now() - parseInt(cachedTime) < CACHE_EXPIRY;
}

function getCachedSearch() {
  return JSON.parse(localStorage.getItem(CACHE_KEY));
}

function fetchSearchData(callback) {
  fetch("/blog-adesansuniar/search.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem("searchTime", Date.now());
      callback(data);
    })
    .catch(() => callback([])); // fallback kosong jika error
}

function initSearch(renderFn) {
  if (isCacheValid()) {
    const cached = getCachedSearch();
    renderFn(cached);
  } else {
    fetchSearchData(renderFn);
  }
}
       function isVersionMismatch(data) {
  return data.version !== "1.2"; // versi sesuai yang kamu tetapkan
}
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
import { renderSearchResults } from "./search-ui.js";

// ...

const sorted = filtered.sort((a, b) => new Date(b.iso_date) - new Date(a.iso_date));
renderSearchResults(sorted, resultsList, query);
