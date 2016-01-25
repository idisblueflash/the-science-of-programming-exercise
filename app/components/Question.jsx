import React from 'react';

export default class Question extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false
		};
	}
	render() {
		var style = {
			title: {
				height: 138,
				width: 831,
				overflow: 'hidden'
			},
			content: {
				height: 150,
				width: 831,
				overflow: 'scroll'		
			},
			fullWidth: {
				width: '100%'
			},
			moveTop: {
				width: '100%',
				position: 'relative',
				top: -138
			}
		};
		return (
			<div>
				<h4>Question:</h4>
			  <div id="imgBoxTitle" style={style.title} >
			    <img style={style.fullWidth} 
			       src="imgs/ch01-e1.png" />
			  </div>
			  <div id="imgBoxContent" 
			       style={style.content} >
			    <img style={style.moveTop}
			       src="imgs/ch01-e1.png" />
			  </div>
			</div>
		)
	}
}
