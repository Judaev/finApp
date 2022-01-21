import React, { FunctionComponent, memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import Button from '../../components/button';
import darkTheme from '../../core/types/darkTheme';
import mainTheme from '../../core/types/mainTheme';
import themeAtom from '../../store/recoil/app/themeAtom';

const NotificationsScreen: FunctionComponent = memo(function FeedScreen() {
  const [appTheme, setAppTheme] = useRecoilState(themeAtom);

  const buttonHandler = useCallback(() => {
    if (appTheme === darkTheme) {
      return setAppTheme(mainTheme);
    }
    return setAppTheme(darkTheme);
  }, [appTheme]);
  return (
    <View>
      <Text>Notifications Screen</Text>
      <Button text='Press' width={100} onPress={buttonHandler} />
    </View>
  );
});

export default NotificationsScreen;
