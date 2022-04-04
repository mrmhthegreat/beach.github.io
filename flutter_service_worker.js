'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "28ee3965480d1bc630f67b3be1fa16f4",
"assets/assets/images/AloeVeraGel.png": "8a993fd389af91be9208ec2950c71e3d",
"assets/assets/images/BeachBag.png": "f30c92f3f569c3440c0f52c99f3c1ff8",
"assets/assets/images/BeachMat.png": "947295ef38909de5b0339f6f2f4c90a9",
"assets/assets/images/beach_chair.png": "e1db8037430e9adc128325272eb793c2",
"assets/assets/images/beach_image.jpg": "75652021c3220ee34faf7b998a14b691",
"assets/assets/images/beach_it_logo.png": "27065fa45fbeb5ec0d43562d140957aa",
"assets/assets/images/beach_set.png": "e0f50d46c865276fe4ddb6d50f554026",
"assets/assets/images/beach_table.png": "861199119f1a08dc88d9379671eb712b",
"assets/assets/images/beach_umbrella.png": "8d7efc9a76b721339f514845eca1947e",
"assets/assets/images/bg_gif.gif": "adc5a642cbced9529abfea84fcb57808",
"assets/assets/images/BluetoothHeadphones.png": "52c47683b29c0cc7956591b60fca31c8",
"assets/assets/images/BugSpray.png": "b4a2a061cc503e39e01c9cef8adaa42a",
"assets/assets/images/CombandBrush.png": "e29b9e00596da0bd134c0b057212bb78",
"assets/assets/images/FlipFlops.png": "fd34638ba38277118fc06f23c4859b9f",
"assets/assets/images/LeaveinHairConditioner.png": "717060a7374316b68567f4fafcd57a53",
"assets/assets/images/LipBalm.png": "c2a80ff8d2d83e7b0e1763cf9b140ec9",
"assets/assets/images/NatuaralHandSanitizier.png": "a71c17499dcd029188217f09d2963c56",
"assets/assets/images/package_1.png": "5f869b2ff13f244b22d3bb5b68cd731c",
"assets/assets/images/package_2.png": "59bd8eed6f7c61c342a0038d606c5cab",
"assets/assets/images/package_3.png": "50e89510c9951737580527efa7e53bcc",
"assets/assets/images/package_4.png": "d3052c7c8aa03153f51fb9cc3e4a6e95",
"assets/assets/images/paypal_logo.png": "47f20a014e1a8f8aad8ea3353004b0b5",
"assets/assets/images/PensacolaBeach-2020-GettyImages-162419903.jpg": "f3df3648e8f24ecaf5325d8b0563b16d",
"assets/assets/images/PersonalHandHeldFan.png": "ecf24c9217051474a8796096d851e2e2",
"assets/assets/images/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/images/PortableLipstickSizedCharger.png": "70c385e4651ab5c3f30dfecba19b6f66",
"assets/assets/images/RashGuard.png": "0792638bb104d621af6dcbdf0492a696",
"assets/assets/images/razorpay_logo.png": "70519e869a3880cd219909db9a4ec3f4",
"assets/assets/images/sample(1).jpg": "ada0bddfa29edb741d2d9e3061288d4a",
"assets/assets/images/sample(1).mp4": "f27220ae4bbd14048641a32a77f186de",
"assets/assets/images/sample(2).jpg": "2247bf2439f9e98fd604bfc7919522e5",
"assets/assets/images/sample(2).mp4": "3565c2970bbee59fc669a1cf402dc0c2",
"assets/assets/images/sample(3).jpg": "4367044cb549370d57c926ae8d3d44a4",
"assets/assets/images/sample(4).jpg": "670df243f4208d727237fd08bd18318e",
"assets/assets/images/sample(5).jpg": "94c96f01f7e596f7711d8d582b2acfb7",
"assets/assets/images/SiliconBib.png": "9bc3ce70a4cff9386eaf3b4509453170",
"assets/assets/images/SlipOnWaterShoes.png": "667f10537c3dbcbe8db7b9dcab229e41",
"assets/assets/images/splash_loading.json": "347248cff3d4385b2e02894852b966cf",
"assets/assets/images/splash_travel.png": "e56af04e7fd09e92e9127b4d631af117",
"assets/assets/images/stripe_logo.png": "d3fd8059e30228ac425eeb07f199ce15",
"assets/assets/images/sunny_weather.jpg": "541463fb06b1d13a3464e1a1995302f5",
"assets/assets/images/SwimUpCoverUp.png": "37bcb6f4d58405960fa18d36625b7dd4",
"assets/assets/images/UnderwaterDigitalCamera.png": "456fa6be35b939f227d15d41cbe52560",
"assets/assets/images/WaterProofCameraFloat.png": "70833597d4b8d67d47dc60e90f25e128",
"assets/assets/images/WaterProofPhoneCase.png": "38c2f6dc95b540d3a3fcbb5c89e9f7c9",
"assets/assets/images/WetDryBag.png": "402b813d877a30ac3df045a68237273d",
"assets/assets/images/WetWipes.png": "71dce112d85709ae548dc0ec90eab9ce",
"assets/assets/images/Wipes_Dry-659710-web.jpg": "0fff536fea93b2ecf31de42ee006a8be",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "547aee013e6e21c441d1e547669ac829",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "741cb0d1318b55af33e1debacc0426df",
"/": "741cb0d1318b55af33e1debacc0426df",
"main.dart.js": "89f2d6052df1ce21dec2c08f5661935e",
"manifest.json": "da8ceebefa881b32907ba6ae11a8ad8c",
"version.json": "89cfbe41ade068245a65814e4be441f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
