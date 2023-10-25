const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const counter = document.querySelector('.counter');

let seconds = 0;
let minutes = 0;
let hours = 0;

let lastClicked = 'stop';

startBtn.addEventListener('click', () => {
	if (lastClicked == 'stop') {
		lastClicked = 'start';
		const counterInterval = setInterval(() => {
			seconds += 1;
			if (seconds >= 60) {
				minutes += 1;
				seconds = 0;
			}

			if (minutes >= 60) {
				hours += 1;
				minutes = 0;
			}
			let hoursStr = hours;
			let minutesStr = minutes;
			let secondsStr = seconds;
			if (`${hours}`.length < 2) {
				hoursStr = '0' + hours;
			}
			if (`${minutes}`.length < 2) {
				minutesStr = '0' + minutes;
			}
			if (`${seconds}`.length < 2) {
				secondsStr = '0' + seconds;
			}
			counter.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
		}, 1000);

		stopBtn.addEventListener('click', () => {
			lastClicked = 'stop';
			clearInterval(counterInterval);
		});
	}
});

resetBtn.addEventListener('click', () => {
	lastClicked = 'stop';
	seconds = 0;
	minutes = 0;
	hours = 0;
	counter.textContent = '00:00:00';
});
