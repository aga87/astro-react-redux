const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

// const urlsToCache = ['index.html', './static/css/main.3829688e.chunk.js', "./static/js/2.b869a28e.chunk.js", "static/js/" ];

// const urlsToCache = ['index.html'];

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
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('offline.html'));
      // return fetch(e.request).catch(() => caches.match(e.request));
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
