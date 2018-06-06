const board = [];

const start = () => {
	for (let i=0; i<8; i++) {
		board[i] = [];
		for (let j=0; j<8; j++) {
			board[i][j] = 0;
		}
	}

	board[3][3] = -1;
	board[3][4] = 1;
	board[4][3] = 1;
	board[4][4] = -1;
}
