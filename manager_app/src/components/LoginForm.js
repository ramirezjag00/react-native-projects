import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Field, Button, Spinner } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		const { email, password, error } = this.props;

		return (
			<Card>
				<CardSection>
					<Field 
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={email}
					/>
				</CardSection>

				<CardSection>
					<Field
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={password}
					/>
				</CardSection>
				
				<Text style={styles.errorTextStyle}>
					{error}
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

// state.auth = { auth }
function mapStateToProps({ auth }) {
	// state.auth.email
	// const { email } = auth;
	const { email, password, error, loading } = auth;

	return {
		email,
		password,
		error,
		loading,
	};
}

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser
})(LoginForm);
