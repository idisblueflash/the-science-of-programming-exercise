import React from 'react';

export default class Drill extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false
		};
	}
	render() {
		if(this.state.checked) {
			return this.renderChecked();
		}

		return this.renderDrill();
	}
	renderDrill = () => {
		return <div>
			{this.props.data.label}
			<input id={this.props.data.id} 
				placeholder={this.props.data.placeholder} 
				onBlur={this.checkDrill} 
				onFocus={this.enterAnswer} />
		</div>;
	};
	renderChecked = () => {
		return <div>
			{this.props.data.label}
			<input id={this.props.data.id}
				value={(this.props.data.key == this.props.data.answer.toUpperCase()) ? "✔️" : "❌ key:" + this.props.data.key}
				onBlur={this.checkDrill}
				onFocus={this.enterAnswer} />
		</div>;
	};
	enterAnswer = (e) => {
		this.setState({checked: false});
	};
	checkDrill = (e) => {
		const value = e.target.value;
		if(value != ""){
			this.setState({checked: true});

			if(this.props.onUpdate && value.trim()) {
				this.props.onUpdate(value);
			}
		}
	};
}
