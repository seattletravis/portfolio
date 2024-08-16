import './binaryClassic.css';

import { useEffect, useState } from 'react';

export default function BinaryClassic() {
	const [timeBinary, setTimeBinary] = useState();
	const [timeDecimal, setTimeDecimal] = useState();

	useEffect(() => {
		setInterval(() => {
			// Get time information here
			const dateObject = new Date();
			const hour = dateObject.getHours();
			const minute = dateObject.getMinutes();
			const second = dateObject.getSeconds();
			let meridian = hour <= 12 ? 'AM' : 'PM';
			let modifiedHour = hour <= 12 ? hour : hour - 12;

			// Decimal clock here
			let hourInDecimal = modifiedHour.toString().padStart(2, '0');
			let minuteInDecimal = minute.toString().padStart(2, '0');
			let secondInDecimal = second.toString().padStart(2, '0');

			const currentTimeDecimal =
				hourInDecimal + ' : ' + minuteInDecimal + ' : ' + secondInDecimal;

			setTimeDecimal(currentTimeDecimal);

			// Binary clock here
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

			setTimeBinary(currentTimeBinary);
		}, 1000);
	}, []);

	return (
		<div>
			<div className='DecimalTime'>{timeDecimal}</div>
			<div className='BinaryTime'>{timeBinary}</div>;
		</div>
	);
}
