import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../screens/main';
import ProfileScreen from '../screens/profile';
import { MainStackParams, MAIN_ROUTES, ProfileStackParams, PROFILE_ROUTES } from './routes';

const MainStackNavigator = createStackNavigator<MainStackParams>();
const ProfileStackNavigator = createStackNavigator<ProfileStackParams>();

const MainStack = (): JSX.Element => (
  <MainStackNavigator.Navigator>
    <MainStackNavigator.Screen name={MAIN_ROUTES.home} component={MainScreen} />
  </MainStackNavigator.Navigator>
);

const ProfileStack = (): JSX.Element => (
  <ProfileStackNavigator.Navigator>
    <ProfileStackNavigator.Screen name={PROFILE_ROUTES.profile} component={ProfileScreen} />
  </ProfileStackNavigator.Navigator>
);

export { MainStack, ProfileStack };
