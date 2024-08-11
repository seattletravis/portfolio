import './design.css';
import BinaryClassic from '../Clocks/binaryClassic';
// import { useEffect, useState } from 'react';

export default function Design() {
	// const [time, setTime] = useState();

	// useEffect(() => {
	// 	setInterval(() => {
	// 		const dateObject = new Date();

	// 		const hour = dateObject.getHours();
	// 		const minute = dateObject.getMinutes();
	// 		const second = dateObject.getSeconds();
	// 		let hourInBinary = hour.toString(2).padStart(4, '0');
	// 		let minuteInBinary = minute.toString(2).padStart(6, '0');
	// 		let secondInBinary = second.toString(2).padStart(6, '0');

	// 		const currentTime =
	// 			hourInBinary + ' : ' + minuteInBinary + ' : ' + secondInBinary;

	// 		setTime(currentTime);
	// 	}, 1000);
	// }, []);

	return <BinaryClassic />;
}
