import uuid from 'node-uuid';
import React from 'react';
import Drills from './Drills.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			drills: [
				{
					id: uuid.v4(),
					label: 'a)',
					answer: '',
					key:'FF',
					checkFlag: false
				},
				{
					id: uuid.v4(),
					label: 'b)',
					answer: '',
					key:'FF',
					checkFlag: false
				}
			]
		}
	}
	render() {
		const drills = this.state.drills;
		return (
			<div>
				<Drills datas={drills} onUpdate={this.updateDrill} />
			</div>
		);
	}
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
