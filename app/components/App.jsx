import uuid from 'node-uuid';
import React from 'react';
import Drills from './Drills.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);
		const rawDrills = [
			'a) FF all_states:_FF', 'b) FT', 'c) TT', 'd) FF', 'e) TF'
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
		}
	}
	
	render() {
		const drills = this.state.drills;
		console.log(drills);
		return (
			<div>
				<Drills datas={drills} onUpdate={this.updateDrill} />
			</div>
		);
	};
	
	updateDrill = (id, answer) => {
		console.log(id, answer);
		const drills = this.state.drills.map(drill => {
			if(drill.id === id && answer) {
				drill.answer = answer;
			}
			return drill;
		});

		this.setState({drills});
	};
}
