import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const firebase = require('firebase');

// temp workaround https://github.com/facebook/react-native/issues/12981
// known issue Add support for AlarmManager in Timing to allow proper handling of long timers #12981
// caused by firebase
console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
	componentDidMount() {
		this.initializeFirebase();
	}

	initializeFirebase() {
		const firebaseConfig = {
			apiKey: 'AIzaSyCKL47PYdl3azz4CzjLxg80jKrP_3mpm4s',
			authDomain: 'manager-5957f.firebaseapp.com',
			databaseURL: 'https://manager-5957f.firebaseio.com',
			projectId: 'manager-5957f',
			storageBucket: 'manager-5957f.appspot.com',
			messagingSenderId: '746894683946'
		};
		
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
