/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["about.html","db0770a5c3aa69f043a7b85565c0bb05"],["basic.html","bf6023efd0a5061f7cbbed0ca178785f"],["images/Arizona_State_University_seal.svg.png","f4772f8e6924e1628530a9ebb3b97bc8"],["images/Embry-Riddle_Aeronautical_University_Seal.png","49db96cdc0f9cd7f6a8264819a4645ec"],["images/NAVAIR-Seal.png","24dff7ae1e96ec637a0cf099ed5137f4"],["images/Nodejs.png","7b2a5cc26693136c72ba0654a490552e"],["images/USNTPS.png","1b85edd5127c6984cb75e9882a006f1e"],["images/bg-2.jpg","43433cf590a0798fa7eb91679dc88b9f"],["images/bg2.jpg","66c09ee842e89a558982f137f05fa555"],["images/bg5.jpg","8ea0cc767b75bf4bfb45c45b5cd2847c"],["images/bodyrock-128x128.png","b8c03f8f470c50930b7756af71607dba"],["images/brewster-logo.jpg","38c504c48322ad54099c58f902550404"],["images/client1.png","9e2d8cad777bf015fda12e796b763e8b"],["images/download (1).png","9c41c803a2a7ea240d05fdfecaf80a60"],["images/download.jpg","fc915cc36f831ddf795e7810c96e1a42"],["images/download.png","2c441ffba9b8954639591cab07664df5"],["images/eslint.svg","7dec57bccc1bd8aa0c94d26eafb30118"],["images/gratus.png","48f6e04e4f0e99803b57b0aa03127b70"],["images/gulp.png","68ee7992d7defe40fa8c32b8c8e67573"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/header-bg.jpg","a2a7a6887fb2bce49eeb0555b20afe08"],["images/header-bg1.jpg","fb1509c2d5094bc4deb77d0c7a3b9460"],["images/javascript.png","5712f6b5cf5ad024d08a67338629aa0e"],["images/loading.gif","b886bf3668ddb7891002da722fcaf03b"],["images/loading.svg","0619f65503b0ece2b7a76df4a8d3575c"],["images/p-1.jpg","0ea64f482615944f57c0522b24d3cc3d"],["images/p-2.png","3f0d6b7ac557692c55362f8c678286f2"],["images/p-3.png","48f6e04e4f0e99803b57b0aa03127b70"],["images/p-4.jpg","85980c0fd3dedd6b04f2dcb7cb664ee5"],["images/p-5.jpg","551a0b2ad88e68840bb1108d7402c2b2"],["images/p-6.png","8e8c6ca68979417594dce97cc4cc6603"],["images/p-7.png","066502684ec41b727378fef7fc5ab134"],["images/proflpic.png","8107eb3725c8f16ab4c43e25440bc2be"],["images/team1.jpg","7b8a70839d9dc009905aeadb354aaa5e"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index-amp.html","0aac6b9290402f3967565550f9d83c1b"],["index.html","765d3cfe2013569fa66043bcb15d5107"],["index2.html","766dd7af6db099c5b42502ce7a63721c"],["manifest.json","53b6f3fc420492c6f939e8bf2d2feafb"],["project.html","902fa77ec54733a0cae9c9f490dd44a0"],["scripts/main.min.js","b7d69dc72e1d8c27450993c01f06203a"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/animate.css","14d96cf58fed73067c53f3c492a1d255"],["styles/jquery.fancybox.css","2a007a954700a0fa6330c74e7fa347c8"],["styles/jquery.modal.css","0b437623acf45e3d03efceab39acaae4"],["styles/main.css","14804ebecff8f6af7f43fa7b8e665f2e"],["styles/nav.css","7f561a7c18a3a4282215fdcf2f2cb232"],["styles/purple.css","83d93c3470bbdfd5e886154ed424e662"],["styles/responsive.css","63768103ab87e8d207c5745efc884b98"],["styles/style.css","ba6db941c8e765bd857c8b7f2d474c15"],["styles/timeline.css","b7fe87fdd751d9d588e1977fc3bfe283"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




