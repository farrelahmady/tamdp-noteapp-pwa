import React from "react";
import "../assets/css/footer.css";

function Footer() {
	return (
		<footer>
			<a href="/note">
				<i class="fas fa-clipboard"></i>
				<h1>Note</h1>
			</a>
			<a href="/task">
				<i class="fas fa-tasks"></i>
				<h1>Task</h1>
			</a>
			<a href="/pray">
				<i class="fas fa-mosque"></i>
				<h1>Sholat</h1>
			</a>
			<a href="/profile">
				<i class="fas fa-user"></i>
				<h1>Profile</h1>
			</a>

			{/* <a href="/setting">
				<i class="fas fa-cog"></i>
				<h1>Setting</h1>
			</a> */}
		</footer>
	);
}

export default Footer;
