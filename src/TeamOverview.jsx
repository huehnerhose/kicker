import React, { Component } from 'react';


class TeamOverview extends Component {

	constructor(props){
		super(props);
		this.state = {
			teams: this.props.teams
		}
	}

	render(){
		return (
			<div className="teamOverview">
				<h2>LineUp</h2>
				{this.renderLineup('violet')}
				{this.renderLineup('yellow')}
			</div>
		);
	}

	renderLineup(team){
		const teamLineup = this.state.teams[team];

		return (
			<div className={'lineup ' + team}>
				<div className="attack">{teamLineup.attack}</div>
				<div className="defense">{teamLineup.defense}</div>
			</div>
		);
	}

}

export default TeamOverview;