import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//props.size
const Spinner = ({ size }) => (
		<View style={styles.spinnerStyle}>
			{/* ActivityIndicator or spinner from react-native */}
			<ActivityIndicator 
				size={size || 'large'}
			/>
		</View>
);

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
};

export { Spinner };
