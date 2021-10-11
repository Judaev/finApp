import React, { FunctionComponent, memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import useTheme from '../../hooks/useTheme';

const MainScreen: FunctionComponent = memo(function MainScreen() {
  const theme = useTheme();

  const buttonHandler = useCallback(() => {
    console.log('Pressed!');
  }, []);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View>
        <Text style={{ color: theme.primary }}>Judaev Denis</Text>
      </View>
      <Button text='Press' width={100} onPress={buttonHandler} />
    </View>
  );
});



export default MainScreen;
