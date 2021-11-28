import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/note.css";

function NoteCard(props) {
	return (
		<Link
         to={{
            pathname: `/detailNote/${props.id}`,
            state: { title: true}
         }}
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
		</Link>
	);
}

export default NoteCard;
