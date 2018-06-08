import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Field = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					// secureTextEntry property of TextInput for password
					// listing this will give a boolean value of true
					// secureTextEntry
					// if undefined, not listed, automatic false
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					// remove autoCorrect
					autoCorrect={false}
					// remove textInput underline in android
					underlineColorAndroid='transparent'
					style={inputStyle}
					value={value}
					onChangeText={onChangeText}
				/>
			</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
};

export { Field };
