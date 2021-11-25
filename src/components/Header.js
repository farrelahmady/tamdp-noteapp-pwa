import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";

import "../assets/css/header.css";

function Header() {
	const [isOpen, setisOpen] = useState(false);
	return (
		<header>
			<a href="/">
				<h1 id="apptitle">NoteApp</h1>
			</a>
			{/* <img
				id="menu"
				class="icon"
				src={"assets/icon/menu.svg"}
				onClick={() => {
					setisOpen(true);
				}}
			/>

			<nav
				style={{
					clipPath: isOpen ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
				}}
			>
				<img
					id="close"
					class="icon"
					src={"assets/icon/close.svg"}
					onClick={() => {
						setisOpen(false);
					}}
				/>
				<div id="category">
					<a href="/note">
						<div class="color" style={{ backgroundColor: "red" }}></div>
						All
					</a>
					<a href="/note">
						<div class="color" style={{ backgroundColor: "blue" }}></div>
						Personal
					</a>
					<a href="/note">
						<div class="color" style={{ backgroundColor: "green" }}></div>
						Work
					</a>
				</div>
				<a href="/profile" id="user">
					<img src="./src/img/user/farrel.webp" alt="" />
					<div>
						<h1>farrel ahmad yudithia</h1>
						<h2>@farrelfay</h2>
					</div>
				</a>
			</nav> */}
		</header>
	);
}

export default Header;
