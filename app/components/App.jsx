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
			'h) TF', 'i) FT', 'j) FT', 'k) TT', 'l) TT', 'm) FT'
		];
		const rawDrills2 = [
			'a) TTTTTTTF all_possible_answers', 'b) FF'
		];
		
		const makeDrill = this.makeDrill;
		const formatedDrills = rawDrills.map(function (rawDrill) {return makeDrill(rawDrill)});
		const formatedDrills2 = rawDrills2.map(function (rawDrill) {return makeDrill(rawDrill)});

		this.state = {
			drills: [formatedDrills, formatedDrills2]
		};
	}
	
	render() {
		const drills = this.state.drills;
		return (
			<div>
				<Question img="imgs/ch01-e1.png" titleHeight="138"/>
				<Drills datas={drills[0]} onUpdate={this.updateDrill} />

				<Question img="imgs/ch01-e2.png" />
				<Drills datas={drills[1]} onUpdate={this.updateDrill} />
				<Timer />
			</div>
		);
	};
	makeDrill = (rawDrill) => {
		const [label, key, placeholder] = rawDrill.split(' ');
		return {
			id: uuid.v4(),
			label: label,
			answer: '',
			key: key,
			placeholder: placeholder
		};
	};
	updateDrill = (id, answer) => {
		// console.log(id, answer);
		const drillGroups = this.state.drills.map(drillGroup => {
			return drillGroup.map(drill => {
				if(drill.id === id && answer) {
					drill.answer = answer;
				}
				return drill;	
			})
		});

		this.setState({drillGroups});
	};
}
