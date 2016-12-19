import React from "react";
import IDSerivce from "./EmployeeIDService.es6";

export default class Item extends React.Component {

	constructor(props){
		super(props);
		this.state = {id: props.id || IDSerivce.getId()}
	}

	getButtons(){
		return []
	}

	render(){
		return (
			<li>

				<dl>
					<dt>ID</dt>
					<dd>{this.state.id}</dd>

					<dt>Name</dt>
					<dd>{this.props.name}</dd>

					<dt>Skill</dt>
					<dd>{this.props.skill}</dd>

					<dt>Title</dt>
					<dd>{this.props.title}</dd>

					<dt>Last Check In</dt>
					<dd>{this.state.lastCheckIn}</dd>
				</dl>

				<div>
					{this.getButtons()}
				</div>

			</li>
		)
	}
}
