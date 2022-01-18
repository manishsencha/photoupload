import React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (
    <AuthProvider>
      <MainScreen/>
    </AuthProvider>
  );
};
export default App;
