const socket = io('http://localhost:3000');

socket.on('connect', () => {
	socket.emit('joinRoom', 'room1');  // For simplicity, everyone joins room1

	// TODO: Handle other gameplay events
});

// Render the game board (this is just a basic placeholder)
function renderBoard(board) {
	const boardDiv = document.getElementById('board');
	boardDiv.innerHTML = '';  // Clear previous board state

	// TODO: Render each piece on the board based on game state
}

// TODO: Implement more gameplay functions
