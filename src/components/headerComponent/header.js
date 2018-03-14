import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
	render() {
		return (
			<div id="heading" className="bannerContainer">
				<h2 className="logo">
					<span>Welcome to Photography</span>
				</h2>
			</div>
		);
	}
}

export default Header;
