import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import NoteCard from "../components/NoteCard";
import NoteAPI from "../config/NoteAPI";

const Note = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		NoteAPI.find().then((res) => {
			console.log(res);
			setNotes(res);
		});
	}, []);

	return (
		<div id="main">
			{notes.map((data) => (
				<Fragment key={data.id}>
					<NoteCard
						id={data.id}
						title={data.note_title}
						content={data.note_content}
						date={data.note_date}
					/>
				</Fragment>
			))}
		</div>
	);
};

export default Note;
