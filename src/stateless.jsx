import React from "react";

export default class Stateless extends React.Component {


	render (){
		return (
			<div>
				<button onClick={this.props.onPrevious}>Previous</button>
				<span>{ this.props.page }</span>
				<button onClick={this.props.onNext}>Next</button>
			</div>
		)
	}

}

Stateless.PropTypes = {
	page: React.PropTypes.number,
	onPrevious: React.PropTypes.func,
	onNext: React.PropTypes.func
};