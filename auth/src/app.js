import React, { Component } from 'react';
import { View } from 'react-native';
// basically like an npm package that you want a 'certain-module-only' syntax
// no need to type in index.js as that is automatic
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentDidMount() {
		this.initializeFirebase();
		const firebase = require('firebase');
		//using firebase.auth, when the state changed, if logged in user, change state, otherwise set it to false
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	initializeFirebase() {
		const firebase = require('firebase');

		const firebaseConfig = {
			apiKey: 'AIzaSyBR5xnpzLqdLlbJm8h8Fklj2HDygwLI3fw',
			authDomain: 'authentication-9c467.firebaseapp.com',
			databaseURL: 'https://authentication-9c467.firebaseio.com',
			projectId: 'authentication-9c467',
			storageBucket: 'authentication-9c467.appspot.com',
			messagingSenderId: '949814922539'
		};

		firebase.initializeApp(firebaseConfig);
	}

	renderContent() {
		const firebase = require('firebase');

		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner style={styles.spinnerStyle} size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	spinnerStyle: {
		justifyContent: 'center',
		alignSelf: 'center',
	},
};

export default App;
