import uuid from 'node-uuid';
import React from 'react';
import Drills from './Drills.jsx';
import Timer from './Timer.jsx';
import Question from './Question.jsx';
import TopTen from './TopTen.jsx';

const makeDrill = (rawDrill) => {
	const [label, key, placeholder] = rawDrill.split('~');
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
			return  makeDrill(drill);
		});
	});
};

const getMaxWidths = (groups) => {
	return groups.map(group => {
		let maxWidth = 0;
		group.map(rawDrill => {
			const textWdith = calculateTextWidth(rawDrill);
			if ( textWdith > maxWidth){
				maxWidth = textWdith;
			}
		});
		return maxWidth;
	});
};

const calculateTextWidth = ( text ) => {
	// checkout text width
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	const textdimensions = ctx.measureText(text);
	const width = parseInt(textdimensions.width + 0.5)
	return width;
};

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
				'a)~FF~all states: FF', 
				'b)~FT', 'c)~TT', 'd)~FF', 'e)~TF', 'f)~TT', 'g)~FF', 
				'h)~TF', 'i)~FT', 'j)~FT', 'k)~TT', 'l)~TT', 'm)~FT'
			],
			[
				'a)~TTTTTTTF~all possible answers', 
				'b)~TFFFFFFF', 'c)~TTTFFFFF', 'd)~TTTTTFFF', 
				'e)~TTTTTTFF', 'f)~FFFFTTFF', 'g)~TTTTTTFF',
				'h)~TTFFFFFF', 'i)~TTTTTTTT'
			],[
				'a)~xlessy v xequaly~x < y as xlessy ^/v/=/=>', 
				'b)~xlessy v xequaly v xgreatery', 
				'c)~xgreatery ^ ygreaterz => vequalw',
				'd)~xlessy ^ ylessz ^ vequalw', 
				'e)~xlessy v ylessz v vequalw', 
				'f)~](xlessy v ylessz v vequalw)',
				'g)~](xlessy ^ ylessz ^ vequalw)',
				'h)~(xlessy => ylessz) ^ (xatleasty => vequalw)',
				'i)~(xlessy => ylessz = vequalw) ^ (xatleasty => ]ylessz) ^ (vequalw => xlessy)',
				'j)~beginxlessy => yequalpower2',
				'k)~beginxless0 => noend',
			]
		];
		const maxWidths = getMaxWidths(rawDrills);

		this.state = {
			drills: makeGroups(rawDrills),
			widths: maxWidths,
			topTen: [
				{date: '06/1/26 21:18', spend: 878,  errors: 0, notes: ''},
				{date: '06/1/26 09:07', spend: 969,  errors: 3, notes: '2. e) h)'},
				{date: '06/1/26 10:40', spend: 1029, errors: 1, notes: '1. b)'},
				{date: '06/1/27 09:26', spend: 1399, errors: 6, notes: '1. j) 2. i) 3. c) j) k) f)'},
				{date: '06/1/27 13:45', spend: 1372, errors: 6, notes: '2. b) c)'},
			]
		};
	}
	
	render() {
		const drills = this.state.drills;
		console.log('widths:' + this.state.widths);
		return (
			<div>
				<TopTen datas={this.state.topTen} />
				<Question img="imgs/ch01-e1.png" titleHeight="138"/>
				<Drills datas={drills[0]} maxWidth={this.state.widths[0]} onUpdate={this.updateDrill} />

				<Question img="imgs/ch01-e2.png"  titleHeight="60"/>
				<Drills datas={drills[1]} maxWidth={this.state.widths[1]} onUpdate={this.updateDrill} />

				<Question img="imgs/ch01-e3.png" titleHeight="40"/>
				<Drills datas={drills[2]} maxWidth={this.state.widths[2]} onUpdate={this.updateDrill} />
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
