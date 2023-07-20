import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.jsx";
import CountdownTimer from "./CountdownTimer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Counter/>
			<CountdownTimer />
		</div>
	);
};

export default Home;
