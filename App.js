import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from './components/MainScreen.js';
import {AboutScreen} from './components/AboutScreen.js';

const Stack = createStackNavigator()

const App: () => React$Node = () => {
    return (
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Main Screen"
                      component={MainScreen}
                      />
                  <Stack.Screen
                      name="About Screen"
                      component={AboutScreen}
                  />
                  </Stack.Navigator>
          </NavigationContainer>
  );
};

export default App;
