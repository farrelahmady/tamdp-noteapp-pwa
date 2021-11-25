import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import NoteCard from "../components/NoteCard";

const Note = () => {
	const item = [
		{
			id: 1,
			title: "Bahasa Pemrograman PHP",
			content:
				"PHP merupakan bahasa pemrograman server-side, maka script dari PHP nantinya akan diproses di server. Jenis server yang sering digunakan bersama dengan PHP antara lain Apache, Nginx, dan LiteSpeed. ",
			date: "2021-11-23",
		},
		{
			id: 2,
			title: "Standard Query Language",
			content:
				"SQL atau Standard Query Language adalah bahasa pemrograman yang digunakan dalam mengakses, mengubah, dan memanipulasi data yang berbasis relasional.",
			date: "2021-11-25",
		},
		{
			id: 3,
			title: "Pesan Mama",
			content: "Jangan tidur larut malam",
			date: "2021-11-25",
		},
	];
	return (
		<div id="main">
			{item.map((data, index) => (
				<Fragment key={data.id}>
					<NoteCard
						title={data.title}
						content={data.content}
						date={data.date}
					/>
				</Fragment>
			))}
		</div>
	);
};

export default Note;
