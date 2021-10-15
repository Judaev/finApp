import React, { FunctionComponent, memo } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import paddings from '../../core/constants/paddings';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';

const ProfileScreen: FunctionComponent = memo(function ProfileScreen() {
  const appStyle = useStyles(styleSheet);

  return (
    <ScrollView style={appStyle.container}>
      <Text>Profile Screen</Text>
    </ScrollView>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: paddings.large,
      backgroundColor: theme.background,
    },
  });

export default ProfileScreen;
