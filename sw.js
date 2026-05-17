const CACHE_NAME = 'ecotrack-v1';

// El navegador requiere un evento "fetch" para validar que es una PWA instalable
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Estás sin conexión a internet.');
        })
    );
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('[Service Worker] Instalado');
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activado');
});

