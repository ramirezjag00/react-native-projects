import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
	// View is a JSX container from react-native
	// style is a property of elements for styling purposes
  <View style={styles.viewStyle}>
    {/* Text is basically a JSX for texts from react-native */}
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

// we don't have CSS in mobile apps but... 
// these are basically like css but in camelCase and in OBJECT format
const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
};

export { Header };
