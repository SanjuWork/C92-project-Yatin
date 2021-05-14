import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainScreen from './screen/MainScreen';


export default class App extends React.Component {
  render(){
  return (
    <View   style={styles.container}>
     <AppContainer/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var  switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  MainScreen : MainScreen
})

const AppContainer =  createAppContainer(switchNavigator);

