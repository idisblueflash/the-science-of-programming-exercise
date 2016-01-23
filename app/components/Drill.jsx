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
			<input id={this.props.data.id} placeholder="all states: FF" onKeyPress={this.updateDrill}/>
		</div>;
	};
	renderChecked = () => {
		return <div>
			{this.props.data.label}
			<input id={this.props.data.id} placeholder="all states: FF" onKeyPress={this.updateDrill} />
			<span>{(this.props.data.key == this.props.data.answer.toUpperCase()) ? "✔️" : "❌ key:" + this.props.data.key}</span>
		</div>;
	};
	updateDrill = (e) => {
		if(e.key === 'Enter') {
			console.log('Drill.updateDrill');
			this.setState({checked: true});
			const value = e.target.value;

			if(this.props.onUpdate && value.trim()) {
				this.props.onUpdate(value);
			}	
		}
	};
}
