import React from "react";
import "../assets/css/note.css";

function NoteCard(props) {
	return (
		<div
			id="note-card"
			className="card"
			style={{ borderLeft: "1vw solid red" }}
		>
			<div id="note-head">
				<h1 id="title">{props.title}</h1>
				<h2 id="date">{props.date}</h2>
			</div>
			<div id="note-content">
				<p>{props.content}</p>
			</div>
		</div>
	);
}

export default NoteCard;
