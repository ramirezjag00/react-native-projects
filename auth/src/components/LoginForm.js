import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Field, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	// eventHandler for login
	// using the state, we use email and password
	// log in user with email and password input when this button is pressed, if not a user (from promise, not resolved, use catch) then create user, if error (using catch again), show the hardcoded error
	// if each method work, make the state to its default
	// basically the error will only show if the user failed to sign in and sign up
	onButtonPress() {
		const firebase = require('firebase');

		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed',
			loading: false,
		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: '',
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Field 
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Field
						// prop for secureTextEntry for TextInput
						// listing this will give a boolean value of true
						// for email, since we did not add this prop, it will return undefined, meaning the email input will show the text and not as bullet or *
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	}
};

export default LoginForm;
