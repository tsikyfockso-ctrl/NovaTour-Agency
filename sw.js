const CACHE_NAME = 'novatour-cache-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './lang.js',
  './favicon.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
document.body.classList.toggle("dark");
