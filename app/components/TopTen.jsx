import React from 'react';

export default class TopTen extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// {date: '06/1/26 9:07', spend: 969, errors: 3, notes: '2.b e h'}
		return (
			<div>
				<h4>Top Ten</h4>
				<table>
					<tbody>
					<tr>
						<th>Date</th>
						<th>Spent</th>
						<th>Errors</th>
						<th>Notes</th>
					</tr>
					{this.renderRows(this.props.datas)}
					</tbody>
				</table>
			</div>
		);
	}

	renderRow = (topRow) => {
		// console.log('renderRow: ', topRow);
		return (
			<tr key={topRow.date}>
				<td>{topRow.date}</td>
				<td>{topRow.spend}</td>
				<td>{topRow.errors}</td>
				<td>{topRow.notes}</td>
			</tr>);
	};

	renderRows = (datas) => {
		return datas.map((data) => {
			return this.renderRow(data);
		});
	};
}
