import React from 'react';
import ReactDOM from 'react-dom';
import GameView from './GameView';
import './css/index.css';
import * as firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyCd7JPxNHmW-M9C9zPvhvYHTZIMuJTZWr4',
	authDomain: 'kicker-f6fe6.firebaseapp.com',
	databaseURL: 'https://kicker-f6fe6.firebaseio.com',
	projectId: 'kicker-f6fe6',
	storageBucket: 'kicker-f6fe6.appspot.com',
	messagingSenderId: '293581367020'
};
firebase.initializeApp(config);

let gameData = {
	score: {
		violet: 1,
		yellow: 2
	},
	teams: {
		violet: {
			attack: 'David',
			defense: 'Katha'
		},
		yellow: {
			attack: 'Sebastian',
			defense: 'Jasmina'
		}
	},
	state: 'running'
};


ReactDOM.render(
	<GameView gameData={gameData} />,
	document.getElementById('root')
);
