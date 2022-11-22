import {useEffect, useState} from 'react';
import * as React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Home';
import ExBeginner from './Screen/ExBeginner';
import ExMiddleClass from './Screen/ExMiddleClass';
import Chest from './Screen/Chest';
import Back from './Screen/Back';
import Abs from './Screen/Abs';
import LowerBody from './Screen/LowerBody';
import Shoulder from './Screen/Shoulder';
import Arm from './Screen/Arm';
import PushupPage from './Screen/PushupPage';
import InclinePushupPage from './Screen/InclinePushupPage';
import DeclinePushupPage from './Screen/DeclinePushupPage';
import WidePushupPage from './Screen/WidePushupPage';
import CloseGripPushupPage from './Screen/CloseGripPushupPage';
import ExMasterClass from './Screen/ExMasterClass';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ExBeginner" component={ExBeginner} />
          <Stack.Screen name="Chest" component={Chest} />
          <Stack.Screen name="Back" component={Back} />
          <Stack.Screen name="Abs" component={Abs} />
          <Stack.Screen name="LowerBody" component={LowerBody} />
          <Stack.Screen name="Shoulder" component={Shoulder} />
          <Stack.Screen name="Arm" component={Arm} />
          <Stack.Screen name="PushupPage" component={PushupPage} />
          <Stack.Screen
            name="InclinePushupPage"
            component={InclinePushupPage}
          />
          <Stack.Screen
            name="DeclinePushupPage"
            component={DeclinePushupPage}
          />
          <Stack.Screen name="WidePushupPage" component={WidePushupPage} />
          <Stack.Screen
            name="CloseGripPushupPage"
            component={CloseGripPushupPage}
          />
          <Stack.Screen name="ExMiddleClass" component={ExMiddleClass} />
          <Stack.Screen name="ExMasterClass" component={ExMasterClass} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
