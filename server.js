// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
	console.log('a user connected', socket.id);

	// Handle other events from clients here
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});

function comparePieces(piece1, piece2) {
	const rank = {
		'soldier': 1,
		'captain': 2,
		'general': 3,
		// ... other pieces
	};

	return rank[piece1] > rank[piece2] ? piece1 : piece2;
}
