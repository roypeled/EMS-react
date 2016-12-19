import Teacher from "./teacher.jsx";
import React from "react";

export default class Manager extends Teacher {

	sayYo(){
		alert(`${this.props.name} says yo`);
	}

	getButtons(){
		return [<button onClick={this.sayYo.bind(this)} key="sayo">Say yo!</button>, ...super.getButtons()]
	}

}
