import {useEffect, useState} from 'react';
import * as React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Home';
import Exercise from './Screen/Exercise';
import Chest from './Screen/Chest';
import Back from './Screen/Back';
import Abs from './Screen/Abs';
import LowerBody from './Screen/LowerBody';
import Shoulder from './Screen/Shoulder';
import Arm from './Screen/Arm';
import ExplanationPage from './Screen/ExplanationPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Exercise" component={Exercise} />
          <Stack.Screen name="Chest" component={Chest} />
          <Stack.Screen name="Back" component={Back} />
          <Stack.Screen name="Abs" component={Abs} />
          <Stack.Screen name="LowerBody" component={LowerBody} />
          <Stack.Screen name="Shoulder" component={Shoulder} />
          <Stack.Screen name="Arm" component={Arm} />
          <Stack.Screen name="ExplanationPage" component={ExplanationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
