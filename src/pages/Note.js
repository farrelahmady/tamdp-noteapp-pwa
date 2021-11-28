import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios";

import NoteCard from "../components/NoteCard";
import NoteAPI from "../config/NoteAPI";

const Note = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		NoteAPI.find("/notes").then((res) => {
			const data = res
			setNotes(data);
		});
	}, []);

	return (
		<div id="main">
			{notes.map((data, index) => (
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
