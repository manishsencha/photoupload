import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAuth} from '../contexts/AuthContext';

const DashboardScreen = () => {
  const {currentUser} = useAuth();
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00dddd',
    height: '100%',
  },
});
