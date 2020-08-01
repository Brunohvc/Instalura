import React from 'react';
import { Feed } from './src/Views/Feed';
import { Login } from './src/Views/Login';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const navigator = createStackNavigator({
  Login: { screen: Login },
  Feed: { screen: Feed }
})

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <AppContainer />
  );
}


export default App;
