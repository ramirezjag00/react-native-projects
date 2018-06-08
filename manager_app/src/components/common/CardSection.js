import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  // this technique will enable the style prop to have an array or styles that, the right most style will overwrite the one on the left
  // <View style={styles.containerStyle}>
  <View style={[styles.containerStyle, props.style]}>
    { props.children }
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
};

export { CardSection };
