import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			
			<div className="ms-auto">
				<Link to="/nuevo">
					<button className="btn btn-success">add contact</button>
				</Link>
			</div>
		</nav>
	</div>
	);
};
