importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0.230fbc3ee67fe48a326a.js",
    "revision": "89c0b90bcbf3143088a676f51b629671"
  },
  {
    "url": "/_nuxt/1.f51a07ce4fc3b61f1d87.js",
    "revision": "609e107f1ef22338944b3b5c43fb521f"
  },
  {
    "url": "/_nuxt/2.c2d4a651c63d1b417fc8.js",
    "revision": "e66e3b1cd3080a1694f9701dd547014d"
  },
  {
    "url": "/_nuxt/3c1e10b75abf0e17574c.css",
    "revision": "abccdf7ff6c941fcc35b82d8810a7c6b"
  },
  {
    "url": "/_nuxt/4.56df7cde2f5dc4ddcba8.js",
    "revision": "711acafda641c6413ac3d2e7ec2f929e"
  },
  {
    "url": "/_nuxt/7360db3c54e1a1ac9225.css",
    "revision": "e64c48e5dc4046b21fbf74b0bf165baf"
  },
  {
    "url": "/_nuxt/73b6a065e62a201a4a74.js",
    "revision": "36d40ae7708c058750ca4c093a688eaa"
  },
  {
    "url": "/_nuxt/8925efb498d1d90b2a96.css",
    "revision": "b61c0f362bad3e036060d3e0c7df921e"
  }
], {
  "cacheId": "nuxt-elm",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
