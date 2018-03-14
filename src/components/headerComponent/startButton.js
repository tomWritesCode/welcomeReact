import React, { Component } from "react";

import { Link } from "react-router-dom";
class Startbutton extends Component {
	render() {
		return (
      <Link to="/Bodyhome">
        <h2 className="startButton">Start</h2>
      </Link>
		);
	}
}

export default Startbutton;
