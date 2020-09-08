'use strict';

//To Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// We Add list of files to cache here.
const FILES_TO_CACHE = [
  '/css/style.css',
  '/css/styleSwitcher.css',
  '/css/skins/blue.css',
  '/css/skins/yellow.css',
  '/css/skins/green.css',
  '/css/skins/orange.css',
  '/js/script.js',
  '/js/slider.js',
  '/js/styleSwitcher.js',
  '/cv/Chimezie-Emeka-Great-Resume.pdf',
  'images/about.png',
  '/'
]; //make an offline.html page and include here so it loads when no connection


self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
);

  self.skipWaiting();
});


self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // To Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
);

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // To Add fetch event handler here.
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
      fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('/images/about.png'); //You can make ofline.html page and put there
                });
          })
  );
});
