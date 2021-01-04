import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import ListNewsScreen from '../screens/ListNews';

import PersonSvg from '../../assets/svg/Person';
import ListSvg from '../../assets/svg/List';

const Tab = createBottomTabNavigator();

const stylesBar = {
  activeColor: '#000',
  inactiveColor: '#7d869b',
  labelText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: 'normal',
  },
  bar: {height: 55},
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let IconSvg;

          if (route.name === 'Home') {
            IconSvg = PersonSvg;
          }

          if (route.name === 'ListNews') {
            IconSvg = ListSvg;
          }

          return <IconSvg color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: stylesBar.activeColor,
        inactiveTintColor: stylesBar.inactiveColor,
        labelStyle: stylesBar.labelText,
        style: stylesBar.bar,
      }}
      detachInactiveScreens={true}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="ListNews" component={ListNewsScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
