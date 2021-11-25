import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "../assets/css/task.css";

function Task(props) {
	console.log(props);
	return (
		<Fragment>
			<div id="task" className="card">
				<div id="task-checkbox"></div>
				<div id="task-head">
					<h1 id="title">{props.title}</h1>
				</div>
				<div id="task-amount">{props.amount}</div>
			</div>
		</Fragment>
	);
}

export default Task;
