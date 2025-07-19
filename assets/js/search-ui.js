export function renderSearchResults(results, container, query) {
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<li>🔍 Tidak ditemukan hasil pencarian.</li>";
    return;
  }

  results.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${post.url}" style="font-weight: bold; text-decoration: none; color: #2b6777;">
        ${highlight(post.title, query)}
      </a><br>
      <small>${post.formatted_date || post.date}</small><br>
      <p style="font-size: 0.9em; color: #555;">${highlight(post.description, query)}</p>
      <span style="font-size: 0.8em; color: #999;">
        🏷️ ${post.tags?.join(', ') || '–'} |
        📂 ${post.categories?.join(', ') || '–'}
      </span>
      <hr>
    `;
    container.appendChild(li);
  });
}

function highlight(text, keyword) {
  if (!text || !keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, `<mark>$1</mark>`);
}
<script type="module" src="/assets/js/search.js"></script>
