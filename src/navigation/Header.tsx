/* eslint-disable @typescript-eslint/ban-ts-comment */
// import IconMenu from '@assets/icons/IconMenu';
// import IconNames from '@assets/icons/iconNames';
// import paddings from '@assets/styles/constants';
// import fonts from '@assets/styles/fonts';
// import { Theme } from '@ay_tsarbet/newbet-core/dist/types';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useCallback, useMemo, FunctionComponent, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { displayName as appName } from '../../app.json';
import Icon from '../components/icon/Icon';
import IconNames from '../components/icon/iconNames';
import paddings from '../core/constants/paddings';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';
// import RowView from './RowView';
// import UIGradientText from './UIGradientText';
// import UIHeaderIconWrapper from './wrappers/UIHeaderIconWrapper';

interface IHeaderProps {
  style?: ViewStyle;
}

export const DEFAULT_CHECKBOX_SIZE = 20;

const Header: FunctionComponent<IHeaderProps & StackHeaderProps> = memo(function UIHeader({
  style,
  navigation,
  scene,
  previous,
}) {
  const appStyle = useStyles(styleSheet);
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  // @ts-ignore
  const backTitle = useMemo(() => scene.route.params?.backTitle, [scene]);
  const arrowColor = useMemo(
    () => (backTitle ? theme.textPrimary : theme.secondary),
    [theme, backTitle]
  );

  // TODO: add animation, some limitations with react-navigation
  return (
    // <>
    //   <Animated.View style={styled}>
    <View style={{ ...appStyle.root, paddingTop: top, ...style, flexDirection: 'row' }}>
      <View style={{ flex: 1, top: 3, flexDirection: 'row' }}>
        {!!previous && (
          <TouchableOpacity onPress={navigation.goBack} style={appStyle.icon}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={IconNames.arrowLeft} color={arrowColor} size={DEFAULT_CHECKBOX_SIZE} />
              {backTitle && (
                <Text style={appStyle.backTitle} numberOfLines={1} ellipsizeMode='tail'>
                  {backTitle}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        {!backTitle && (
          // <UIGradientText style={appStyle.title} height={40} width={120} value={appName} />
          <Text>FinApp</Text>
        )}

        <Spacer />
      </View>
    </View>
    //   </Animated.View>
    // </>
  );
});

const Spacer = memo(function () {
  return <View style={{ flex: 1 }} />;
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme.background,
      paddingHorizontal: paddings.default,
      paddingVertical: paddings.small,
    },
    title: {
      // ...fonts.title1Bold,
      fontWeight: '800',
    },
    icon: {
      padding: paddings.small,
      paddingLeft: 0,
      top: -2,
    },
    backTitle: {
      // ...fonts.headline,
      color: theme.textPrimary,
      top: -1,
      paddingLeft: paddings.small,
      marginRight: paddings.small,
      fontWeight: '800',
    },
  });

export default Header;
