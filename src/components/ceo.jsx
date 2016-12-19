import Manager from "./manager.jsx";
import React from "react";

export default class CEO extends Manager {

	fireAll(){
		this.props.onFireAll();
	}

	getButtons(){
		return [<button onClick={this.fireAll.bind(this)} key="fireall">Fire All</button>, ...super.getButtons()];
	}

}
