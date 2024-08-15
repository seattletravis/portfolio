import './binaryClassic.css';

import { useEffect, useState } from 'react';

export default function BinaryClassic() {
	const [time, setTime] = useState();

	useEffect(() => {
		setInterval(() => {
			const dateObject = new Date();

			const hour = dateObject.getHours();
			const minute = dateObject.getMinutes();
			const second = dateObject.getSeconds();

			let meridian = hour <= 12 ? 'AM' : 'PM';
			let modifiedHour = hour <= 12 ? hour : hour - 12;

			let hourInBinary = modifiedHour.toString(2).padStart(4, '0');
			let minuteInBinary = minute.toString(2).padStart(6, '0');
			let secondInBinary = second.toString(2).padStart(6, '0');

			const currentTimeBinary =
				hourInBinary +
				' : ' +
				minuteInBinary +
				' : ' +
				secondInBinary +
				' ' +
				meridian;

			setTime(currentTimeBinary);
		}, 1000);
	}, []);

	return <div className='BinaryClassic'>{time}</div>;
}
