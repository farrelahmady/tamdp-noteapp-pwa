import React, { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import TaskCard from "../components/TaskCard";
import TaskAPI from "../config/TaskAPI";

export default function Task() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		TaskAPI.find().then((res) => {
			console.log(res);
			setTasks(res);
		});
	}, []);
	return (
		<div id="main">
			{tasks.map((data) => (
				<Fragment key={data.id}>
					<TaskCard
						title={data.task_title}
						content={data.task_content}
						amount={data.task_amount}
						goal={data.task_goal}
					/>
				</Fragment>
			))}
		</div>
	);
}
