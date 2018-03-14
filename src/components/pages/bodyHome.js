import React, { Component } from "react";

import { Link } from "react-router-dom";
class Bodyhome extends Component {
	render() {
		return (
			<div id="bulk" className="frame">
				<div className="grid ">
					<div className="item box" tabindex="1">
						Start Here!
					</div>
					<div className="item box" tabindex="2">
						About Me
					</div>
					<div className="item box" tabindex="3">
						Glossary of Terms
					</div>
					<div className="item box" tabindex="4">
						Article 4
					</div>
					<div className="item box" tabindex="5">
						Article 5
					</div>
					<div className="item box" tabindex="6">
						Article 6
					</div>
				</div>
			</div>
		);
	}
}


export default Bodyhome;
