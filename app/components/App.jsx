import uuid from 'node-uuid';
import React from 'react';
import Drill from './Drill.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			drills: [
				{
					id: uuid.v4(),
					label: 'a)',
					answer: '',
					key:'FF'
				},
				{
					id: uuid.v4(),
					label: 'b)',
					answer: '',
					key:'FF'
				}
			]
		}
	}
	render() {
		const drills = this.state.drills;
		return (
			<div>
				<ul>{drills.map(drill =>
					<li key={drill.id}>
						<Drill data={drill} />
					</li>
					)}</ul>
				</div>
		);
	}
	checkDrill = (drill) => {
		console.log(drill);
	};
}
