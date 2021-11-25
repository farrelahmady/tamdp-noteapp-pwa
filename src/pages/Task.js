import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import TaskCard from "../components/TaskCard";

export default function Task() {
	const item = [
		{
			id: 1,
			title: "Tugas Akhir MDP",
			content: "Progressive Web Apps - ReactJs",
			amount: 50,
		},
		{
			id: 2,
			title: "Tugas Akhir SBD",
			content: "ERD, Database, PHP",
			amount: 30,
		},
	];
	return (
		<div id="main">
			{item.map((data, index) => (
				<Fragment key={data.id}>
					<TaskCard
						title={data.title}
						content={data.content}
						amount={data.amount}
					/>
				</Fragment>
			))}
		</div>
	);
}
