import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/Home';
import ListNewsScreen from '../screens/ListNews';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={HomeScreen}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="ListNews" component={ListNewsScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
