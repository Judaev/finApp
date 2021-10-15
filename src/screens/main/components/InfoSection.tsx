import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';

const InfoSection: FunctionComponent = memo(function InfoSection() {
  const appStyles = useStyles(styleSheet);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
      <Text style={appStyles.text}>sdahjfhsaj</Text>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: paddings.large * 2,
      paddingVertical: paddings.default,
      paddingHorizontal: paddings.default,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,

      backgroundColor: theme.backgroundSecondary,
    },
    text: {
      color: theme.textPrimary,
      height: 50,
    },
  });

export default InfoSection;
