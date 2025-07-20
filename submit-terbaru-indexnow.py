import json
import requests

# Konfigurasi
SITE_URL = "https://adesansuniar.github.io/blog-adesansuniar"
JSON_PATH = "terbaru.json"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
YOUR_INDEXNOW_KEY = "GANTI_DENGAN_KEY_KAMU"

# Baca daftar post dari terbaru.json
with open(JSON_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

# Ambil list URL
urls = [SITE_URL + post["url"] for post in data]

# Payload IndexNow
payload = {
    "host": SITE_URL.replace("https://", "").replace("http://", ""),
    "key": YOUR_INDEXNOW_KEY,
    "keyLocation": SITE_URL + "/" + YOUR_INDEXNOW_KEY + ".txt",  # Tidak wajib untuk subdomain
    "urlList": urls
}

# Kirim ke IndexNow
response = requests.post(INDEXNOW_ENDPOINT, json=payload)

# Output hasil
if response.status_code == 200:
    print("✅ Berhasil submit URL ke IndexNow.")
else:
    print(f"❌ Gagal: {response.status_code} - {response.text}")
