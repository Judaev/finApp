import React, { FunctionComponent, memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
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
import { BOTTOM_TABS_ROUTES, GLOBAL_MODAL_ROUTES, MAIN_ROUTES } from './routes';
import { MainStack, ProfileStack } from './NavStack';
import RegistrationScreen from '../screens/auth';
import { Linking } from 'react-native';
import IntroScreen from '../screens/intro';
import InitialSettingsScreen from '../screens/ initialSettings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Main: {
      screens: {
        [MAIN_ROUTES.home]: '',
      },
    },
    Profile: 'user',
    NotFound: '*',
    Auth: '*',
  },
};

const linking = {
  prefixes: ['https://testtestxxxx.com', 'azurbetting://'],

  /**
   * Picked from https://reactnavigation.org/docs/deep-linking/
   * for deep linking third-party example
   */
  async getInitialURL() {
    // First, you may want to do the default deep link handling
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Integrated api
    // const params = branch.getFirstReferringParams();
    // return params?.$canonical_url;
  },

  // Custom function to subscribe to incoming links
  subscribe(listener: (url: string) => void) {
    // First, you may want to do the default deep link handling
    const onReceiveURL = ({ url }: { url: string }) => listener(url);

    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);

    // Next, you would need to subscribe to incoming links from your third-party integration
    // For example, to get to subscribe to incoming links from branch.io:
    // branch.subscribe(({ error, params, uri }) => {
    //   if (error) {
    //     console.error('Error from Branch: ' + error);
    //     return;
    //   }

    //   if (params['+non_branch_link']) {
    //     const nonBranchUrl = params['+non_branch_link'];
    //     // Route non-Branch URL if appropriate.
    //     return;
    //   }

    //   if (!params['+clicked_branch_link']) {
    //     // Indicates initialization success and some other conditions.
    //     // No link was opened.
    //     return;
    //   }

    //   // A Branch link was opened
    //   const url = params.$canonical_url;

    //   listener(url);
    // });

    return () => {
      // Clean up the event listeners
      Linking.removeEventListener('url', onReceiveURL);
      // branch.unsubscribe();
    };
  },

  config,
};

const BottomTabNavigation: FunctionComponent = memo(function BottomTabNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='MainStack'
      tabBar={(props) => <BottomTabs {...props} />}
      sceneContainerStyle={{ backgroundColor: theme.background }}
    >
      <Tab.Screen
        name={BOTTOM_TABS_ROUTES.MAIN}
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name={IconNames.home} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TABS_ROUTES.ANALYTICS}
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={IconNames.analytics} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={BOTTOM_TABS_ROUTES.PROFILE}
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
          <Stack.Screen name='Intro' component={IntroScreen} />
          <Stack.Screen name='Registration' component={RegistrationScreen} />
          <Stack.Screen name='InitialSettings' component={InitialSettingsScreen} />
          <Stack.Screen name='MainScreen' component={BottomTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

export default AppNavigation;
