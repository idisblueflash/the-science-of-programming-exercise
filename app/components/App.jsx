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
				<Drills datas={drills} />
			</div>
		);
	}
	checkDrill = (id) => {
		console.log(id);
	};
}
