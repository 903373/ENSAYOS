// Cachea la app para que abra sin cobertura. Las llamadas a Google van siempre por red.
const CACHE = 'ensayos-v1';
const ARCHIVOS = ['./', './index.html', './qr.html', './manifest.json', './icon.svg', './icon-192.png', './icon-512.png',
  './vendor/html5-qrcode.min.js', './vendor/qrcode.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // red primero (para coger actualizaciones), caché si no hay red
  e.respondWith(
    fetch(e.request).then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request, {ignoreSearch: true}))
  );
});
