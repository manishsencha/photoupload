import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import DashboardScreen from './DashboardScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function MainScreen() {
  const {currentUser, logOut} = useAuth();
  return (
    <NavigationContainer>
      {currentUser ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#00aaff',
            },
          }}>
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              headerRight: () => <Button title="Logout" onPress={logOut} />,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#00aaff',
            },
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
