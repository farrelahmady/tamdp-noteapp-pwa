import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Note from "./pages/Note";
import Profile from "./pages/Profile";
import Task from "./pages/Task";
import DetailNote from "./pages/DetailNote";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Pray from "./pages/Pray";

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Note />} />
					<Route path="/note" element={<Note />} />
					<Route path="/task" element={<Task />} />
					<Route path="/pray" element={<Pray />} />
					<Route path="/detail" element={<DetailNote />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
