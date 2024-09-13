import { useEffect, useState } from "react";

export const TodoDate = ({ onDate }) => {
	const [dateTime, setDateTime] = useState("");
	onDate(dateTime);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const formattedDate = now.toLocaleString();
			setDateTime(`${formattedDate}`);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<h2 className="date-time d-flex align-items-center justify-content-center">
			{dateTime}
		</h2>
	);
};
