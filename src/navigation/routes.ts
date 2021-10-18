import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export enum BOTTOM_TABS_ROUTES {
  MAIN = 'MainStack',
  PROFILE = 'ProfileStack',
  ANALYTICS = 'AnalyticsStack',
}

export enum MAIN_ROUTES {
  home = 'home',
}

export enum PROFILE_ROUTES {
  profile = 'profile',
}

export enum GLOBAL_MODAL_ROUTES {
  auth = 'Auth',
  menu = 'Menu',
  test = 'ModalTest',
  calendar = 'calendar',
  camera = 'camera',
}

export type MainStackParams = {
  [MAIN_ROUTES.home]: undefined;
};

export type ProfileStackParams = {
  [PROFILE_ROUTES.profile]: undefined;
};
