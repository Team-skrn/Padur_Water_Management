self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
    // Optional: Handle fetch requests for offline capabilities
});
