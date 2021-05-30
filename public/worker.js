importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js');

let CACHE_NAME = 'Menu Cart';
let urlsToCache = ['/', '/login', '/home', '/menu', '/checkout'];

// Install a service worker
self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// Update a service worker
self.addEventListener('activate', (event) => {
    let cacheWhitelist = ['Menu Cart'];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


firebase.initializeApp({
    apiKey: 'AIzaSyCVTTHpKL92SEeoy6u_jppAC0YC2UK75-M',
    authDomain: 'menu-cart-pwa.firebaseapp.com',
    projectId: 'menu-cart-pwa',
    storageBucket: 'menu-cart-pwa.appspot.com',
    messagingSenderId: '“470419810890”',
    appId: '1:470419810890:web:364c9c7801696c76df94b3',
    measurementId: 'G-JEM18R3W2Y',
});


const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Log: ~> file: firebase-messaging-sw.js ~> line 9 ~> payload', payload);
    const promiseChain = clients
        .matchAll({
            type: 'window',
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            console.log('Log: ~> file: firebase-messaging-sw.js ~> line 16 ~> .then ~> windowClients', windowClients);
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification('my notification title');
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('Log: ~> file: firebase-messaging-sw.js ~> line 28 ~> event', event);
    // do what you want
    // ...
});

// messaging.onBackgroundMessage(function (payload) {
//     console.log('Received background message ', payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
