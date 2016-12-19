import React from "react";

const SKILLS = ["CEO", "Manager", "Teacher", "Employee", "Pilot"];
const EmptyState = {title: SKILLS[0], name: "", skill: ""};

export default class Form extends React.Component {

	constructor(props){
		super(props);
		this.props = props;
		this.state = EmptyState;
	}

	addEmployee(e){
		e.preventDefault();
		this.props.onAdd(this.state);
		this.setState(EmptyState);
	}

	handleName(e){
		this.setState({name: e.target.value});
	}

	handleSkill(e){
		this.setState({skill: e.target.value});
	}

	handleTitle(e){
		this.setState({title: e.target.value});
	}


	render(){
		return (
			<form>
				<input type="text" onChange={this.handleName.bind(this)} value={this.state.name} placeholder="Name..."/>
				<input type="text" onChange={this.handleSkill.bind(this)} value={this.state.skill} placeholder="Skill..."/>
				<select name="title" onChange={this.handleTitle.bind(this)} value={this.state.title}>
					{
						this.props.titles.map(
							(title, i)=> <option key={i} value={title}>{title}</option>
						)
					}
				</select>
				<button onClick={this.addEmployee.bind(this)}>Add Employee</button>
			</form>
		)
	}
}

Form.propTypes = {titles: React.PropTypes.array, onAdd: React.PropTypes.func.isRequired};
Form.defaultProps = {titles: SKILLS};
