import uuid from 'node-uuid';
import React from 'react';

export default class App extends React.Component {
	render() {
		const drills = [
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
		];
		return (
			<div>
				<ul>{drills.map(drill =>
					<li key={drill.id}>{drill.label}</li>
					)}</ul>
				</div>
		);
	}
}
