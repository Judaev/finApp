import React, { FunctionComponent, memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/main';
import AnalyticsScreen from '../screens/analytics';
import ProfileScreen from '../screens/profile';
import NotificationsScreen from '../screens/notifications';
import Icon from '../components/icon/Icon';
import IconNames from '../components/icon/iconNames';
import useTheme from '../hooks/useTheme';
import BottomTabs from './BottomTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigation: FunctionComponent = memo(function BottomTabNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      detachInactiveScreens
      initialRouteName='MainStack'
      tabBar={(props) => <BottomTabs {...props} />}
      sceneContainerStyle={{ backgroundColor: theme.background }}
    >
      <Tab.Screen
        name='Main'
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name={IconNames.home} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={IconNames.accountCard} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={IconNames.phone} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Analytics'
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={IconNames.analytics} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
});

const AppNavigation: FunctionComponent = memo(function AppNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // header: (props) => <Header {...props} />,
          }}
        >
          <Stack.Screen name='MainScreen' component={BottomTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

export default AppNavigation;
