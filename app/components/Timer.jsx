import React from 'react';

export default class Timer extends React.Component {	
	constructor(props) {
		super(props);

		const counter=setInterval(this.timer, 1000); //1000 will  run it every 1 second

		this.state = {
			count: 0,
			counter: counter
		};
	}

	

	render() {
		return (
			<div>
				time: {this.state.count}
				<button onClick={this.stopTimer} >Finish</button>
			</div>
		)
	};

	timer = () => {
		// console.log('timer with seconds:', this.state.count);
		let count =  this.state.count;
		count++;
		this.setState({count: count});
	};

	stopTimer = () => {
		clearInterval(this.state.counter);
	};
}
