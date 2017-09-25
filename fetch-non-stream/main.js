
async function init() {
	console.time('Network Request');
	const response = await fetch('https://jsonplaceholder.typicode.com/photos');
	const text = await response.text();
	console.timeEnd('Network Request');
	document.body.innerHTML = text;
}

init();
