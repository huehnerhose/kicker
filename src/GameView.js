import React, { Component } from 'react';
import GoalButtons from './GoalButton';
import Score from './Score';
import TeamOverview from './TeamOverview';
import './css/GameView.css';
import _ from 'lodash';
import { min,max,values } from 'lodash/fp';

class GameView extends Component {

	constructor(props) {
		super(props);
		this.state = props.gameData;
	}



	render() {
		return (
			<div>
				<h1>Spielübersicht</h1>
				<Score score={this.state.score} />
				{
					this.state.state === 'running' &&
					<GoalButtons score={this.state.score} handleGoal={this.handleGoal.bind(this)} />
				}
				<TeamOverview teams={this.state.teams} />
			</div>
		);
	}

	handleGoal(team) {
		const score = this.state.score;
		score[team]++;

		let newState = {
			score: score
		};

		let won = this.checkWinningCondition(score);
		if(won === true){
			newState.state = 'done';
		}

		this.setState(newState);
	}

	checkWinningCondition(score){
		const minimalGoalsToWin = 5;
		const minimalDifferenceToWin = 2;

		const values = _.values(score);
		const lead = _.max(values);
		const tail = _.min(values);

		// Threshold not reached
		if(lead < minimalGoalsToWin){
			return false;
		}

		// Winning condition
		if( lead - tail >= minimalDifferenceToWin ){
			return true;
		}

		return false;
	}
}


export default GameView;