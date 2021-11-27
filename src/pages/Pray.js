import React, { Fragment } from "react";
import PrayCard from "../components/PrayCard";

import "../assets/css/pray.css";

export default function Pray() {
	const time = [
		{
			id: "0",
			title: "Subuh",
			time: "05.00",
		},
		{
			id: "0",
			title: "Dhuhur",
			time: "12.00",
		},
		{
			id: "0",
			title: "Ashar",
			time: "15.00",
		},
		{
			id: "0",
			title: "Maghrib",
			time: "18.00",
		},
		{
			id: "0",
			title: "Isya",
			time: "19.00",
		},
	];

	return (
		<div id="main">
			{time.map((data) => (
				<Fragment key={data.id}>
					<PrayCard title={data.title} time={data.time} />
				</Fragment>
			))}
		</div>
	);
}
