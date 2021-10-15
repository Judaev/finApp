import React, { FunctionComponent, memo, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';

const ProfileHeader: FunctionComponent = memo(function ProfileHeader() {
  const appStyles = useStyles(styleSheet);

  return (
    <View style={appStyles.container}>
      <View style={appStyles.titleContainer}>
        <Text style={appStyles.userTitle}>Hi, Judaev 👋</Text>
        <Text style={appStyles.welcomeText}>Welcome back</Text>
      </View>
      <View style={appStyles.iconContainer}>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/870/211/png-transparent-iphone-world-emoji-day-man-iphone-electronics-face-head.png',
          }}
          style={appStyles.iconStyles}
        />
      </View>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: paddings.default,
    },
    titleContainer: {},
    userTitle: {
      fontSize: 18,
      color: theme.textPrimary,
    },
    welcomeText: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.textPrimary,
    },
    iconContainer: {
      backgroundColor: theme.background,
    },
    iconStyles: {
      width: 50,
      height: 50,
      backgroundColor: theme.background,
      borderRadius: 50,
    },
  });

export default ProfileHeader;
