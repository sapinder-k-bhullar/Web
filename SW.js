if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
         navigator.serviceWorker.register('/SW.js');
     });
 }

 importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

 workbox.precaching.precacheAndRoute([
     '/final.html',
     '/TODO.js',
     '/TODO.css'
 ]);
 
 workbox.routing.registerRoute(
     /\.htm(l?)$/,
     new workbox.strategies.StaleWhileRevalidate({
         cacheName: 'html-cache',
     })
 );
 