//  ./App.js
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default App;
