import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import AppNavigation from './src/navigation';

const ConfigureApp = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar barStyle={'default'} />
      <AppNavigation />
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
