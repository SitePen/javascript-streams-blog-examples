
async function init() {
	const readableStream = new ReadableStream({
		start(controller) {
			controller.enqueue(1);
			controller.enqueue(2);
			controller.enqueue(3);
			controller.close();
		}
	});

	const writableStream = new WritableStream({});

	await readableStream.pipeTo(writableStream);
	console.log('Piping has finished');
}

init();
