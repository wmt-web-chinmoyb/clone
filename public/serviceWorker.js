const CASHE_NAME="version-1"
const urlsToCashe=['index.html','offline.html']
this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CASHE_NAME).then(cache=>{
            console.log("open Cache")
            return cache.addAll(urlsToCashe)
        })
    )
})
this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then(res=>
            {
                return fetch(event.request).catch(()=>caches.match('offline.html'))
            }
            )
    )
})