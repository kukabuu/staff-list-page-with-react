import React, { Component } from 'react';
import { connect } from 'react-redux';

import Arrow from '../arrow/Arrow';
import Slide from '../slide/Slide';

import './Carousel.css';

class Carousel extends Component {
	state = {
		startIndex: 0
	}

	displayUsers = (usersArr, primeIndex) => {  
		const displayedArr = [];
		const slideNumber = 4;
		const displayedSlideNumber = usersArr.length < slideNumber ? usersArr.length : slideNumber;
		let currentIndex = primeIndex;

		for (let i = 0; i < displayedSlideNumber; i++) {
			currentIndex = (currentIndex < usersArr.length) ? currentIndex : 0;
			displayedArr.push(usersArr[currentIndex]);
			currentIndex++;
		}

		return displayedArr;
	}

	toSlide = direction => {

		const { startIndex } = this.state;
		const { users } = this.props;
		let tempIndex = startIndex;

		switch (direction) {
		case "right": 
			tempIndex = (startIndex < users.length)	? startIndex + 1 : 0;
			break;
		case "left":
			tempIndex = (startIndex > 0) ? startIndex - 1	: users.length - 1;
			break;
		default: 
			break;
		}
		this.setState({startIndex: tempIndex});
	}

	render() {
		const { startIndex } = this.state;
		const { users } = this.props;
		const usersArrToDisplay = this.displayUsers(users, startIndex);
		const userSlides = usersArrToDisplay.map(user => {
			const {id} = user;
			return (
				<div key={id} className="carousel-slide">
					<Slide {...user} />
				</div>
			)
		});
		

		return (
			<section className="carousel">			
				<Arrow toSlide={this.toSlide} direction="left" />
				{userSlides}
				<Arrow toSlide={this.toSlide} direction="right" />
			</section>
		);
	}

	
}

const mapStateToProps = (state) => {
	return {
		users: state.usersReducer.users
	}
}

export default connect(mapStateToProps)(Carousel);