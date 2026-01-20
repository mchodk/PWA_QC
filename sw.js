const CACHE_NAME = 'qc-cache-v1';
const urlsToCache = [
  './index.html',
  './html2pdf.bundle.min.js',
  './manifest.json',
  './icon.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});