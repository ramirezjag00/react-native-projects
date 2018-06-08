import React, { Component } from 'react';
import {
  Platform,
  View,
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// import PizzaTranslator from './src/components/pizzaInput';
// import Bananas from './src/components/coverPhoto';

// define a const that checks the platform (using Platform from react-native) then use .select method to match the value if either ios or android then show the message 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      //fill the entire view area with the contents here
      <View style={{ flex: 1 }}>
        {/*<Bananas />*/}
        <Header headerText='Albums' />
        <AlbumList />
        {/*<PizzaTranslator />*/}
      </View>
    );
  }
}
