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
import Yraise from './Screen/Yraise';
import Wraise from './Screen/Wraise';
import Traise from './Screen/Traise';
import Superman from './Screen/Superman';
import WideSquat from './Screen/WideSquat';
import Squat from './Screen/Squat';
import Lunge from './Screen/Lunge';
import PikepushUp from './Screen/PikepushUp';
import Plank from './Screen/Plank';
import DumbbellCurl from './Screen/DumbbellCurl';
import DumbbellKickBack from './Screen/DumbbellKickBack';

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
          <Stack.Screen name="Yraise" component={Yraise} />
          <Stack.Screen name="Wraise" component={Wraise} />
          <Stack.Screen name="Traise" component={Traise} />
          <Stack.Screen name="Superman" component={Superman} />
          <Stack.Screen name="WideSquat" component={WideSquat} />
          <Stack.Screen name="Squat" component={Squat} />
          <Stack.Screen name="Lunge" component={Lunge} />
          <Stack.Screen name="PikepushUp" component={PikepushUp} />
          <Stack.Screen name="Plank" component={Plank} />
          <Stack.Screen name="DumbbellCurl" component={DumbbellCurl} />
          <Stack.Screen name="DumbbellKickBack" component={DumbbellKickBack} />
          <Stack.Screen name="ExMiddleClass" component={ExMiddleClass} />
          <Stack.Screen name="ExMasterClass" component={ExMasterClass} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
