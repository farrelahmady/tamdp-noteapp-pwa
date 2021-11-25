import React from "react";
import "../assets/css/profile.css";

export default function Profile() {
	return (
		<div id="profile" className="main">
			<img src="./assets/img/farrel.webp" />
			<h1 id="nama">Farrel Ahmad Yudithia</h1>
			<table>
				<tr>
					<th>Email :</th>
					<td>farrelfay.ce@gmail.com</td>
				</tr>
				<tr>
					<th>Username :</th>
					<td>@farrelfay</td>
				</tr>
				<tr>
					<th>Birthdate :</th>
					<td>20 May 2001</td>
				</tr>
				<tr>
					<th>Address :</th>
					<td>Semarang, Jawa Tengah</td>
				</tr>
			</table>
			<button id="logout">Logout</button>
		</div>
	);
}
