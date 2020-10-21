self.addEventListener('install', () => {
    console.log("Happy to meet you! I'm a SW!")
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('No hay internet!', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                    'Content-Type': 'text/html'
                })
            })
        })
    );
});