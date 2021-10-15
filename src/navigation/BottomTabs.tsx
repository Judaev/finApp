// import { boxShadow } from '@assets/styles/shadow';
// import RowView from '@components/RowView';
// import UIToasts from '@components/UIToasts';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { bottomTabsPlusAtom } from '@store/recoil/app/atoms/bottomTabsPlusAtom';
// import { currentBottomTabAtom } from '@store/recoil/app/atoms/currentBottomTabAtom';
import React, { FunctionComponent, memo, useMemo, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '../components/icon/Icon';
import IconNames from '../components/icon/iconNames';
import { SCREEN_WIDTH } from '../core/constants/constants';
import paddings from '../core/constants/paddings';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';
// import BottomTabsPlus from './BottomTabsPlus';

const BOTTOM_TABS_CONTAINER_HEIGHT = 55;

const BottomTabs: FunctionComponent<BottomTabBarProps> = memo(function BottomTabs({
  state,
  descriptors,
  navigation,
  // activeTintColor,
  // inactiveTintColor,
}) {
  const focusedOptions = useMemo(
    () => descriptors[state.routes[state.index].key].options,
    [descriptors, state]
  );
  const componentStyle = useStyles(styleSheet);
  const theme = useTheme();
  const BOTTOM_TABS_ICON_SIZE = useRef(28).current;
  const { bottom: homeIndicationSize } = useSafeAreaInsets();
  const activeColor = useMemo(() => theme.primary, [theme]);
  const inactiveColor = useMemo(() => theme.textSecondary, [theme]);
  // const bottomTabsPlusProps = useRecoilValue(bottomTabsPlusAtom);
  // const [, setCurrentBottomTab] = useRecoilState(currentBottomTabAtom);

  // if (focusedOptions.tabBarVisible === false) {
  //   return null;
  // }

  return (
    <>
      <View
        style={{
          ...componentStyle.container,
          bottom: homeIndicationSize || paddings.default,
        }}
      >
        {/* {bottomTabsPlusProps && (
          <View
            style={{
              marginTop: paddings.small,
              marginHorizontal: paddings.small,
            }}
          >
            <BottomTabsPlus {...bottomTabsPlusProps} />
          </View>
        )} */}

        <View style={{ flexDirection: 'row' }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const focused = state.index === index;
            const color = focused ? activeColor : inactiveColor;

            // if (focused) {
            //   setCurrentBottomTab(route);
            // }

            const icon = options.tabBarIcon ? (
              options.tabBarIcon({ focused, color: color as string, size: BOTTOM_TABS_ICON_SIZE })
            ) : (
              <Icon name={IconNames.close} color='red' />
            );

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableWithoutFeedback
                key={route.name}
                accessibilityRole='button'
                accessibilityState={focused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <View style={componentStyle.tabButton}>{icon}</View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
      {/* <UIToasts style={{ bottom: BOTTOM_TABS_CONTAINER_HEIGHT + paddings.default }} /> */}
    </>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      width: SCREEN_WIDTH - 2 * paddings.default,
      position: 'absolute',
      marginHorizontal: paddings.default,
      borderRadius: paddings.default,
      borderWidth: 1,
      borderColor: theme.primary,

      // ...boxShadow(),
    },
    tabButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      paddingVertical: paddings.default,
    },
  });

export default BottomTabs;
