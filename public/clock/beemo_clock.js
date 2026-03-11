import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js';

const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

const dispDate = document.getElementById('date');

const weekday = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const hours = [
	'12',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
];
const minuteList = [
	'00',
	'01',
	'02',
	'03',
	'04',
	'05',
	'06',
	'07',
	'08',
	'09',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'31',
	'32',
	'33',
	'34',
	'35',
	'36',
	'37',
	'38',
	'39',
	'40',
	'41',
	'42',
	'43',
	'44',
	'45',
	'46',
	'47',
	'48',
	'49',
	'50',
	'51',
	'52',
	'53',
	'54',
	'55',
	'56',
	'57',
	'58',
	'59',
];

const dispTime = document.getElementById('time');

const returnBtn = document.getElementById('returnToBtn');

returnBtn.addEventListener('mouseover', () => {
	returnBtn.innerHTML = 'Yes, take me back!';
});

returnBtn.addEventListener('mouseout', () => {
	returnBtn.innerHTML = 'Return to Game Menu';
});

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;

	let am_pm = 'am';
	if (day.getHours() > 11) {
		am_pm = 'pm';
	}

	dispDate.textContent = `Today is ${weekday[day.getDay()]}: ${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`;
	dispTime.textContent = `Current time is: ${hours[day.getHours()]}:${minuteList[day.getMinutes()]}:${minuteList[day.getSeconds()]} ${am_pm}`;
});

const pupils = document.getElementById('beemo_pupils');
const tail = document.getElementById('beemo_tail');

const tailMotion = gsap.timeline({ repeat: -1 });
tailMotion.to(tail, {
	duration: 1,
	x: 6,
	rotation: 40,
	ease: 'curve',
});
tailMotion.to(tail, {
	duration: 1,
	x: 0,
	rotation: 0,
});

const pupilMotion = gsap.timeline({ repeat: -1 });
pupilMotion.to(pupils, {
	duration: 1,
	x: 4,
});
pupilMotion.to(pupils, {
	duration: 1,
	x: -1,
});

// const tailAndEyes = document.getElementById("beemo_tail_eyes")
// // const beemoFrames = ["./beemo_clock_images/001", "./beemo_clock_images/002.png","./beemo_clock_images/003.png","./beemo_clock_images/004.png","./beemo_clock_images/005.png","./beemo_clock_images/006.png","./beemo_clock_images/007.png","./beemo_clock_images/008.png"]
// const beemoFrames = ["./beemo_clock_images/1and5.png", "./beemo_clock_images/1_5and4_5.png","./beemo_clock_images/2and4.png","./beemo_clock_images/2_5and3_5.png","./beemo_clock_images/3rightMost.png","./beemo_clock_images/2_5and3_5.png","./beemo_clock_images/2and4.png","./beemo_clock_images/1_5and4_5.png", "./beemo_clock_images/1and5.png", "./beemo_clock_images/5_5and8_5return.png","./beemo_clock_images/6and8.png","./beemo_clock_images/6_5and7_5.png","./beemo_clock_images/7leftMost.png","./beemo_clock_images/6_5and7_5.png","./beemo_clock_images/6and8.png","./beemo_clock_images/5_5and8_5return.png"]
// function animateBeemo(image, arr, speed){
//   let i = 0;
//   const beemoTimer = setInterval(function(){
//     if (i >= arr.length){
//       i = 0;
//     }
//     image.src = arr[i++]}
//   , speed)
//   }
// animateBeemo(tailAndEyes, beemoFrames, 125);
