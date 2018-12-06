importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app_543398f81c134c1c90de.js",
    "revision": "e0760a7aaa50c4502a341417a8ce9150"
  },
  {
    "url": "/_nuxt/chunk_20a8668aadf1c8e2c7a0.js",
    "revision": "6518136968d9ed83b2b8fafe7028ddc1"
  },
  {
    "url": "/_nuxt/chunk_a3cd8cb7cafeda8e4855.js",
    "revision": "28b0b9b1773006699d5f1ca100c5aeef"
  },
  {
    "url": "/_nuxt/chunk_ae4fbb150ae899796bee.js",
    "revision": "f05b6d0cc53becd4b6b53472224d336d"
  },
  {
    "url": "/_nuxt/chunk_e112bbb734c0a8f05b7b.js",
    "revision": "cddaa66babf6dd20d66551ed208b649f"
  },
  {
    "url": "/_nuxt/css/5494729a72a4af88eca0.css",
    "revision": "807a4327383dcc27c3810f3c5bc78935"
  },
  {
    "url": "/_nuxt/css/5d7032384da7c7da066a.css",
    "revision": "5ec22797bd0aa03b86755fc47d7b1448"
  },
  {
    "url": "/_nuxt/css/7360db3c54e1a1ac9225.css",
    "revision": "e64c48e5dc4046b21fbf74b0bf165baf"
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
