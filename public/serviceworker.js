// const CACHE_NAME = 'version-2';
// const urlsToCache = ['index.html', 'offline.html'];

// const self = this;

// // Install SW

// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Listen for requests

// self.addEventListener('fetch', (e) => {
//   e.respondWith(
//     // Look for the match in the cache
//     caches.match(e.request).then(() => {
//       return fetch(e.request).catch(() => caches.match('offline.html'));
//     })
//   );
// });

// // Activate the service worker

// self.addEventListener('activate', (e) => {
//   console.log('Service Worker: Activated');
//   // Remove unwanted caches
//   e.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== CACHE_NAME) {
//             console.log('Service Worker: Clearing Old Cache');
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// testing

const CACHE_NAME = 'v1';
const urlsToCache = ['offline.html'];
const self = this;

// Install SW

self.addEventListener('install', (e) => {
  console.log('SW installed');

  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate and remove old caches

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
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
              console.log('caching');
              return res;
            })
            .catch(() => caches.match('/offline.html'))
      );
    })
  );
});
