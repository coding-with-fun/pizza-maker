let cacheData = 'App v1';

this.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(cacheData).then((cache) => {
			cache.addAll([
				'/static/js/bundle.js',
				'/static/js/0.chunk.js',
				'/static/js/main.chunk.js',
				'/favicon.ico',
				'/static/media/Basil.52379452.png',
				'/static/media/Olive.6372d730.png',
				'/static/media/Pineapple.7a09335d.png',
				'/static/media/Tomato.144e7092.png',
				'/static/media/Mushroom.a5356d2a.png',
				'/static/media/PizzaBase.a392a995.png',
				'/static/media/pizza%20logo.6a680773.png',
				'https://fonts.gstatic.com/s/indieflower/v12/m8JVjfNVeKWVnh3QMuKkFcZVaUuH99GUDg.woff2',
				'https://fonts.gstatic.com/s/alata/v2/PbytFmztEwbIoce9zqYzQ1OW.woff2',
				'https://fonts.gstatic.com/s/comfortaa/v29/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfJh1Zyc61YA.woff',
				'https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMR7eS2Ao.woff2',
				'https://fonts.googleapis.com/css2?family=Alata&family=Comfortaa&family=Indie+Flower&family=Open+Sans+Condensed:wght@300&display=swap',
				'/index.html',
				'/manifest.json',
				'/',
				'/checkout',
			]);
		}),
	);
});

this.addEventListener('fetch', (event) => {
	if (!navigator.onLine) {
		event.respondWith(
			caches.match(event.request).then((result) => {
				if (result) {
					return result;
				}

				let requestURL = event.request.clone();
				return fetch(requestURL);
			}),
		);
	}
});
