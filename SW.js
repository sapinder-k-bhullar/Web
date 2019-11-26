
    if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
        });
    }

    importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

    workbox.precaching.precacheAndRoute([
        '/localStorage.html',
        '/TODO.js',
        '/TODO.css'
    ]);
    
    workbox.routing.registerRoute(
        /\.htm(l?)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'html-cache',
        })
    );
    