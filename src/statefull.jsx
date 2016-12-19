import React from "react";
import Stateless from "./stateless.jsx";

export default class Statefull extends React.Component {

	constructor(){
		super();

		this.state = {
			page: 2
		}
	}

	previousPage(){
		this.setState({page: this.state.page-1});
	}

	nextPage(){
		this.setState({page: this.state.page+1});
	}

	render (){
		return (
			<Stateless page={this.state.page}
			           onPrevious={this.previousPage.bind(this)}
			           onNext={this.nextPage.bind(this)}
			/>
		)
	}
}
