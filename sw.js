// set sw version
const version = '1.0';

// set static cache / app shell
const appAssets = [
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'css/my-styles.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json',
    'img/dest'
];
    
// install sw
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(`static-${version}`)
            .then(cache => cache.addAll(appAssets))
    );
});

// activate sw
self.addEventListener('activate', e => {
    let cleaned = caches.keys()
                    .then( keys => {
                        keys.forEach( key => {
                            if ( key !== `static-${version}` && key.match('static-')) {
                                return caches.delete(key);
                            }
                        });
                    });
    e.waitUntil(cleaned);
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
