
async function init() {
	const response = await fetch('file.txt');
	const reader = response.body.getReader();
	const contentLengthHeader = response.headers.get('Content-Length');
	const resourceSize = parseInt(contentLengthHeader, 10);

	async function read(reader, totalChunkSize = 0, chunkCount = 0) {
		const {value: {length} = {}, done} = await reader.read();

		if (done) {
			return chunkCount;
		}

		const runningTotal = totalChunkSize + length;
		const percentComplete = Math.round((runningTotal / resourceSize) * 100);

		const progress = `${percentComplete}% (chunk ${chunkCount})`;

		console.log(progress);
		document.body.innerHTML += progress + '<br />';

		return read(reader, runningTotal, chunkCount + 1);
	}

	const chunkCount = await read(reader);
	console.log(`Finished! Received ${chunkCount} chunks.`);
}

init();
