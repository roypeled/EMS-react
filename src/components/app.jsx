import React from "react";
import Form from "./form.jsx";
import List from "./list.jsx";

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {list: []};
	}

	addEmployee(data){
		let arr = this.state.list;
		arr.push(data);
		this.setState({list: arr});
	}

	fireAll(){
		let arr = this.state.list.filter( item=> (item.title == "CEO") );
		this.setState({list: arr});
	}

	render(){
		return (
			<div>
				<Form onAdd={this.addEmployee.bind(this)} />
				<List value={this.state.list} onFireAll={this.fireAll.bind(this)} />
			</div>
		);
	}
}
