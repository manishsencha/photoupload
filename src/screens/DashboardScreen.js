import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../contexts/AuthContext';

const DashboardScreen = () => {
  const {currentUser, logOut} = useAuth();
  const Logout = async () => {
    await logOut();
  };

  return (
    <View style={styles.container}>
      <Text>{currentUser && currentUser.email}</Text>
      <TouchableOpacity style={styles.buttonPrimary} onPress={Logout}>
        <Text style={styles.textPrimary}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00dddd',
    height: '100%',
  },
  buttonPrimary: {
    backgroundColor: '#00aaff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 4,
  },
  textPrimary: {
    fontSize: 20,
    color: '#fff',
  },
});
