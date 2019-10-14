import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Arrow from '../arror/Arrow';
import Slide from '../slide/Slide';


import './Carousel.css';

class Carousel extends Component {
	state = {
		startIndex: 0
	}

	toDisplayUsers = (usersArr, startIndex) => {  
		const displayedArr = [];
		const slideNumber = 4;
		const displayedSlideNumber = usersArr.length < slideNumber ? usersArr.length : slideNumber;
		let currentIndex = startIndex;

		for (let i = 0; i < displayedSlideNumber; i++) {
			currentIndex = (currentIndex < usersArr.length) ? currentIndex : 0;
			displayedArr.push(usersArr[currentIndex]);
			currentIndex++;
		}

		return displayedArr;
	}

	toSlide = direction => {
		const {startIndex} = this.state;
		const {users} = this.props;
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
		const {startIndex} = this.state;
		const {users, history} = this.props;

		const usersArrToDisplay = this.toDisplayUsers(users, startIndex);

		const userSlides = usersArrToDisplay.map(user => {
			const {id, name, avatar} = user;
			return (
				<div key={id} className="carousel-slide">
					<Slide 
						id={id}
						name={name}
						pic={avatar}
						onUserSelected={(userId) => { 
							history.push(`/user/${userId}`);
						}}
					/>
				</div>
			)
		});

		return (
			<section className="carousel">
				<a href='/'>На главную</a> 	
				<Arrow toSlide={this.toSlide} direction="left" />
				{userSlides}
				<Arrow toSlide={this.toSlide} direction="right" />
			</section>
		);
	}
}

export default withRouter(Carousel);