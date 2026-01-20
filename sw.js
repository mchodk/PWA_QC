const CACHE_NAME = 'qc-cache-v1';
const urlsToCache = [
  'index.html',
  'html2pdf.bundle.min.js',
  'manifest.json',
  'icon.png',
  'icon-512.png'
];

// Instalacja Service Worker i cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch – zwracanie z cache jeśli offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});