import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import MainScreen from './src/screens/main';

const ConfigureApp = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar barStyle={'dark-content'} />
      <MainScreen />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <ConfigureApp />
    </RecoilRoot>
  );
};

export default App;
