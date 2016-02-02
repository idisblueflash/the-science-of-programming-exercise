import React from 'react';

export default class Timer extends React.Component {	
	constructor(props) {
		super(props);

		const counter=setInterval(this.timer, 1000); //1000 will  run it every 1 second

		this.state = {
			seconds: 0,
			minutes: 0,
			counter: counter
		};
	}

	render() {
		return (
			<div>
				Spent: {this.state.minutes}'{this.state.seconds}
				<button onClick={this.stopTimer} >I am done</button>
			</div>
		)
	};

	timer = () => {
		// console.log('timer with seconds:', this.state.seconds);
		let second =  this.state.seconds;
		let minute =  this.state.minutes;
		if(second == 60){
			second = 0;
			minute++;
			this.setState({minutes: minute});
		}else{
			second++;	
		}
		this.setState({seconds: second});
	};

	stopTimer = () => {
		clearInterval(this.state.counter);
	};
}
