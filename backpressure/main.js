
async function init() {
	const countStrategy = new CountQueuingStrategy({
		highWaterMark: 2
	});

	const writableStream = new WritableStream({}, countStrategy);

	const writer = writableStream.getWriter();

	console.log(writer.desiredSize); // 2
	writer.write('1');
	console.log(writer.desiredSize); // 1
	writer.write('1');
	console.log(writer.desiredSize); // 0
	await writer.write('1');
	console.log(writer.desiredSize); // 2
}

init();
