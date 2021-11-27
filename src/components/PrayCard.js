import React from "react";

export default function PrayCard(props) {
	return (
		<div id="pray" className="card">
			<h1 id="title">{props.title}</h1>

			<div id="time">{props.time}</div>
		</div>
	);
}
