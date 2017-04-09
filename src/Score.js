import React, { Component } from 'react';
import './css/Score.css';

class Score extends Component {
	renderScoreForTeam(team) {
		const score = this.props.score[team];

		return <TeamScore
			team={team}
			score={score}
		/>
	}

	render() {
		return (
			<div className="scoreboard">
				{this.renderScoreForTeam("yellow")}
				{this.renderScoreForTeam("violet")}
			</div>
		);
	}
}

class TeamScore extends Component {
	render() {
		return (
			<div className={"scoreTeam "+this.props.team}>
				<div className="team">{this.props.team}</div>
				<div className="score">{this.props.score}</div>
			</div>
		);
	}
}

export default Score;