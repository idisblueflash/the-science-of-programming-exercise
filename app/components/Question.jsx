// Question Component
//
// show question image with options
// img 					- string, question image file
// titleHeight 	- int, height that title part in image
// 
// Example:
// <Question img="imgs/ch01-e1.png" />
// <Question img="imgs/ch01-e1.png" titleHeight="138"/>

import React from 'react';

export default class Question extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if ( this.props.titleHeight ){
			return this.renderSplitQuestion();
		}else{
			return this.renderQuestion();
		}
	}
	renderSplitQuestion = () => {
		const style = {
			title: {
				height: this.props.titleHeight,
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
				top: -this.props.titleHeight	
			}
		};
		return <div>
				<h4>Question:</h4>
			  <div id="imgBoxTitle" style={style.title} >
			    <img style={style.fullWidth} 
			       src={this.props.img} />
			  </div>
			  <div id="imgBoxContent" 
			       style={style.content} >
			    <img style={style.moveTop}
			       src={this.props.img} />
			  </div>
			</div>;
	};
	renderQuestion = () => {
		const style = {
			titleAndContent: {
				width: 831,
				overflow: 'hidden'
			},
			fullWidth: {
				width: '100%'
			}
		};
		return <div>
				<h4>Question:</h4>
			  <div id="imgBoxTitle" style={style.titleAndContent} >
			    <img style={style.fullWidth} 
			       src={this.props.img} />
			  </div>
			</div>;
	};
}
