const introInfo = document.getElementById('introInfo');
const onePlayerInfo = document.getElementById('onePlayerInfo');
const twoPlayerInfo = document.getElementById('twoPlayerInfo');

const playerOneButton = document.getElementById('playerOneButton');
const playerTwoButton = document.getElementById('playerTwoButton');
const startButton = document.getElementById('startButton');
const aboutButton = document.getElementById('aboutButton');

let infoFlag = true;
let playerOneFlag = false;
let playerTwoFlag = false;

playerOneButton.addEventListener('click', () => {
	playerTwoButton.className =
		'm-auto text-red-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-red-600 opacity-40';
	playerOneButton.className =
		'm-auto text-blue-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-blue-600 opacity-100';
	startButton.className =
		'm-auto text-purple-600 text-2xl font-bold border-4 border-purple-600 rounded-full px-4 py-3 opacity-100';
	introInfo.className = 'hidden';
	twoPlayerInfo.className = 'hidden';
	onePlayerInfo.className = 'text-blue-600';
	playerTwoFlag = false;
	playerOneFlag = true;

	// ⭐ Correct navigation for single-player
	startButton.onclick = () => {
		window.location.href = 'https://travislamberte.com/tilt3d/single';
	};
});

playerTwoButton.addEventListener('click', () => {
	playerOneButton.className =
		'm-auto text-blue-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-blue-600 opacity-40';
	playerTwoButton.className =
		'm-auto text-red-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-red-600 opacity-100';
	startButton.className =
		'm-auto text-purple-600 text-2xl font-bold border-4 border-purple-600 rounded-full px-4 py-3 opacity-100';
	introInfo.className = 'hidden';
	onePlayerInfo.className = 'hidden';
	twoPlayerInfo.className = 'text-red-600';
	playerOneFlag = false;
	playerTwoFlag = true;

	// ⭐ Correct navigation for multiplayer
	startButton.onclick = () => {
		window.location.href = 'https://travislamberte.com/tilt3d/multi';
	};
});

startButton.addEventListener('click', () => {
	if (!playerOneFlag && !playerTwoFlag) {
		return;
	}

	if (playerOneFlag) {
		console.log('Start Playing Game in Single Player Mode');
		// Navigation already handled above
	} else {
		console.log('Start Playing Game in Multiplayer Mode');
		// Navigation already handled above
	}
});
