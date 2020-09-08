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
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // CODELAB: Add fetch event handler here.

});
