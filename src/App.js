import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Header from "./components/headerComponent/header";
import Startbutton from "./components/headerComponent/startButton";
import Footer from "./components/footerComponent/footer";
import Bodyhome from "./components/pages/bodyHome";

// Includes
import "./assets/css/default.min.css";
class App extends Component {
	render() {
		return (
			<Router>
        <div className="App">
        
          <Header />
          <Bodyhome />

				</div>
			</Router>
		);
	}
}

export default App;

// <Route exact path='/Homepage' component={Homepage} /> - Route path for change page. 
// <Route exact path="/Products" component={Products} />;
