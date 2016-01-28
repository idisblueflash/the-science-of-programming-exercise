import React from 'react';

const markWrongChar = (answer, index) => {
	const answerChars = answer.split("");
	answerChars[index] = '>' + answerChars[index] + '<';
	return answerChars.join("");
};

const compareString = ( answer, key ) => {
	// const answer = 'fffftttt';
	// const key    = 'FFFTTTTT';
	answer = answer.toUpperCase();
	key = key.toUpperCase();
	let i = 0;
	while( i < key.length){
		const answerChar = answer.substr(i,1);
		const keyChar = key.substr(i,1);

		console.log('comparing: answer('+ answerChar + ") with " + keyChar);
		if( answerChar != keyChar) {
			return i;
		}
		i++;
	}
	return 0;
};

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

		if(this.state.checked) {
			// mark wrong string
			const index = compareString( this.props.data.answer, this.props.data.key);
			const markedAnswer = markWrongChar(this.props.data.answer, index);
			const formatedAnswer = isRight ? this.props.data.answer : markedAnswer ;
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
