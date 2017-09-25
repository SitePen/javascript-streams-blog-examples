
async function init() {
	const stream = new ReadableStream({
		start(controller) {
			controller.enqueue(1);
			controller.enqueue(2);
			controller.enqueue(3);
		},

		pull(controller) {
			console.log('Data was pulled from me!', controller);

			controller.enqueue(4);
			controller.enqueue(5);
			controller.enqueue(6);
			controller.close();
		},

		cancel(reason) {
			console.log('Stream was cancelled because: ', reason);
		}
	});

	const reader = stream.getReader();

	console.log(await reader.read());
	console.log(await reader.read());
	console.log(await reader.read());
	console.log(await reader.read());
	console.log(await reader.read());
	console.log(await reader.read());
	console.log(await reader.read());
}

init();
