import Item from "./item.jsx";
import React from "react";

export default class Teacher extends Item {

	checkIn(){
		this.setState({lastCheckIn: new Date().toString()});
	}

	getButtons(){
		return [<button onClick={this.checkIn.bind(this)} key="checkin">Check In</button>]
	}

}
