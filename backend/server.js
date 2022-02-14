require('module-alias/register')
const http = require('http');
const os = require('os')
const WebSocket = require('@/src/util/websocket');

if (!process.env.STATIC_SERVER === "nginx"){
	const { frontend, frontendport } = require('@/frontend');
}
const { backend, backendport } = require("@/backend");

async function StartServer() {
	try {
		const backendserver = http.createServer(backend);
		backendserver.listen(backendport, function () {
			console.log(`REST API - http://127.0.0.1:${backendport}/api/`)
			const SockIo = new WebSocket(backendserver);
			//Send something other WebSocket
			setInterval(() => {
				SockIo.emit("/time", new Date().toTimeString())
			}, 1000)
		})

		if (!process.env.STATIC_SERVER === "nginx"){
			frontend.listen(frontendport, function () {
				console.log(`Webapplication - http://127.0.0.1:${frontendport}`);
			});
		}
		

	} catch (err) {
		console.error('Server did not start', err);

		process.exit(1)
	}
}

StartServer()