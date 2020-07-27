const CACHE_NAME = 'version-1';
// const urlsToCache = ['index.html', 'offline.html'];

// fixme: test
const urlsToCache = [
  'index.html',
  'offline.html',
  './static/css/main.3829688e.chunk.js',
  './static/js/2.b869a28e.chunk.js',
  './static/js/main.3b66b31b.chunk.js',
  './static/js/runtime-main.0f635a3f.js',
  './media/guess.fdc4060f.mp3',
  './media/menu.8ca81100.mp3',
  './media/pass.90dee89d.mp3',
  './media/start.26dce6d5.mp3',
  './media/sunrise-from-space.621cf67a.jpg',
];

const self = this;

// Install service worker

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');

      return cache.addAll(urlsToCache);
    })
  );
});

// fixme:  https://blog.bitsrc.io/understanding-service-workers-and-caching-strategies-a6c1e1cbde03

// Listen for requests

self.addEventListener('fetch', (e) => {
  e.respondWith(
    // Look for the match in the cache
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('offline.html'));
    })
  );
});

// Activate the service worker

self.addEventListener('activate', (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});