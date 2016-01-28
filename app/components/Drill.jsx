import React from 'react';

export default class Drill extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false
		};
	}
	render() {
		// setup color and answer text
		const isRight = this.props.data.key.toUpperCase() == this.props.data.answer.toUpperCase();
		const style = {
			color: isRight ? 'green' : 'red',
			width: this.props.maxWidth
		};
		const formatedAnswer = isRight ? this.props.data.answer : this.props.data.key ;

		if(this.state.checked) {
			return this.renderChecked(style, formatedAnswer);
		}

		return this.renderDrill();
	}
	renderDrill = () => {
		return <div>
			{this.props.data.label}
			<input id={this.props.data.id} 
				style={{width:this.props.maxWidth}}
				placeholder={this.props.data.placeholder} 
				onBlur={this.checkDrill} />
		</div>;
	};
	renderChecked = (style, formatedAnswer) => {
		return <div>
			{this.props.data.label}
			<input type="text"
				id={this.props.data.id}
				style={style}
				value={formatedAnswer}
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
