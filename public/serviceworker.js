const CACHE_NAME = 'v1';
const urlsToCache = ['offline.html'];
const self = this;

// Install SW

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate and remove old caches

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheKeys) => {
      return Promise.all(
        cacheKeys
          .filter((cacheKey) => cacheKey !== CACHE_NAME)
          .map((cacheKey) => caches.delete(cacheKey))
      );
    })
  );
});

// Cache on network response:
// If a request doesn't match anything in the cache, get it from the network,
// send it to the page, and add it to the cache at the same time.

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(e.request).then(
        (response) =>
          response ||
          fetch(e.request)
            .then((res) => {
              cache.put(e.request, res.clone());
              return res;
            })
            .catch(() => caches.match('/offline.html'))
      );
    })
  );
});
