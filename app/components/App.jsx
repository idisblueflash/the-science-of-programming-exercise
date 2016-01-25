import uuid from 'node-uuid';
import React from 'react';
import Drills from './Drills.jsx';
import Timer from './Timer.jsx';
import Question from './Question.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);
		const rawDrills = [
			'a) FF all_states:_FF', 
			'b) FT', 'c) TT', 'd) FF', 'e) TF', 'f) TT', 'g) FF', 
			'h) TF', 'i) TF', 'j) FT', 'k) TT', 'l) TT', 'm) FT'
		];
		const formatedDrills = rawDrills.map(function (rawDrill) {
			const [label, key, placeholder] = rawDrill.split(' ');
			return {
				id: uuid.v4(),
				label: label,
				answer: '',
				key: key,
				placeholder: placeholder
			};
		});

		this.state = {
			drills: formatedDrills
		};
	}
	
	render() {
		const drills = this.state.drills;
		return (
			<div>
				<Question img="imgs/ch01-e1.png" titleHeight="138"/>
				<Drills datas={drills} onUpdate={this.updateDrill} />

				<Question img="imgs/ch01-e2.png" />
				<Timer />
			</div>
		);
	};
	
	updateDrill = (id, answer) => {
		// console.log(id, answer);
		const drills = this.state.drills.map(drill => {
			if(drill.id === id && answer) {
				drill.answer = answer;
			}
			return drill;
		});

		this.setState({drills});
	};
}
