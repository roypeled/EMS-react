import React from "react";
import CEO from "./ceo.jsx";
import Manager from "./manager.jsx";
import Teacher from "./teacher.jsx";

export default class List extends React.Component{

	getItem(itemData, i){
		switch (itemData.title){
			case "CEO": return <CEO {...itemData} key={i} onFireAll={this.props.onFireAll} />;
			case "Manager": return <Manager {...itemData} key={i} />;
			default: return <Teacher {...itemData} key={i} />;
		}
	}

	render(){
		return (
			<ul>
				{
					this.props.value.map(this.getItem.bind(this))
				}
			</ul>
		)
	}
}

List.PropTypes = {
	value: React.PropTypes.array
};
