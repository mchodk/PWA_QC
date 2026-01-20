const cacheName = "qc-assistant-v1";
const assetsToCache = [
  "/PWA_QC/",
  "/PWA_QC/index.html",
  "/PWA_QC/manifest.webmanifest",
  "/PWA_QC/icon-192.png",
  "/PWA_QC/icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});