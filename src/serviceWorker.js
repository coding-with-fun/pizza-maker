export default function swDev() {
	let swURL = `${process.env.PUBLIC_URL}/publicServiceWorker.js`;
	navigator.serviceWorker.register(swURL).then((res) => {});
}
