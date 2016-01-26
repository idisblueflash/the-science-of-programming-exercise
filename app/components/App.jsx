import uuid from 'node-uuid';
import React from 'react';
import Drills from './Drills.jsx';
import Timer from './Timer.jsx';
import Question from './Question.jsx';
import TopTen from './TopTen.jsx';

const makeDrill = (rawDrill) => {
	const [label, key, placeholder] = rawDrill.split(' ');
	return {
		id: uuid.v4(),
		label: label,
		answer: '',
		key: key,
		placeholder: placeholder
	};
};

const makeGroups = (groups) => {
	return groups.map(group => {
		group = shuffle(group);
		return group.map(drill => {
			return makeDrill(drill);
		});
	});
}

// http://bost.ocks.org/mike/shuffle/
const shuffle = (array) => {
  var copy = [], n = array.length, i;
  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);
    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

export default class App extends React.Component {
	constructor(props){
		super(props);
		const rawDrills =  [
				[
					'a) FF all_states:_FF', 
					'b) FT', 'c) TT', 'd) FF', 'e) TF', 'f) TT', 'g) FF', 
					'h) TF', 'i) FT', 'j) FT', 'k) TT', 'l) TT', 'm) FT'
				],
				[
					'a) TTTTTTTF all_possible_answers', 'b) TFFFFFFF', 'c) TTTFFFFF',
					'd) TTTTTFFF', 'e) TTTTTTFF', 'f) FFFFTTFF', 'g) TTTTTTFF',
					'h) TTFFFFF', 'i) TTTTTTTT'
				]
			];

		this.state = {
			drills: makeGroups(rawDrills),
			topTen: [
				{date: '06/1/26 9:07', spend: 969, errors: 3, notes: '2.e h'},
				{date: '06/1/25 9:07', spend: 969, errors: 3, notes: ''}
			]
		};
	}
	
	render() {
		const drills = this.state.drills;
		return (
			<div>
				<TopTen datas={this.state.topTen} />
				<Question img="imgs/ch01-e1.png" titleHeight="138"/>
				<Drills datas={drills[0]} onUpdate={this.updateDrill} />

				<Question img="imgs/ch01-e2.png" />
				<Drills datas={drills[1]} onUpdate={this.updateDrill} />
				<Timer />
			</div>
		);
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
