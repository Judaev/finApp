import React, { FunctionComponent, memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';

const ProfileHeader: FunctionComponent = memo(function ProfileHeader() {
  const appStyles = useStyles(styleSheet);

  const notification = require('../../../core/images/notification.png');

  return (
    <View style={appStyles.container}>
      <View style={appStyles.titleContainer}>
        <Text style={appStyles.userTitle}>Привет, Денис 👋</Text>
        <Text style={appStyles.welcomeText}>С возвращением!</Text>
      </View>
      <TouchableOpacity>
        <View>
          <Image source={notification} style={{ width: 40, height: 40 }} />
          {true && (
            <View
              style={{
                borderRadius: 16,
                backgroundColor: 'red',
                width: 20,
                height: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white' }}>1</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
