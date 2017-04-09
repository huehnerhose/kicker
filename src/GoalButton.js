import React, { Component } from 'react';

class GoalButton extends Component {
	render() {
		return (
			<button onClick={() => this.props.onClick()}>{this.props.team}</button>
		);
	}
}



class GoalButtons extends Component {
	constructor(props){
		super(props);
		this.state = {
			score: props.score
		};
	}

	render() {
		return (
			<div className="button-row">
				{this.renderGoalButton('yellow')}
				{this.renderGoalButton('violet')}
			</div>
		);
	}

	renderGoalButton(team) {
		const goals = this.state.score[ team ];
		return (
			<GoalButton
				team={team}
				score={goals}
				onClick={() => this.props.handleGoal(team)}
			/>
		);
	}
}



export default GoalButtons;