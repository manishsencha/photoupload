import React, {useState, useEffect} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../contexts/AuthContext';

const LoginScreen = ({navigation}) => {
  const {login, currentUser} = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const Login = async () => {
    setLoading(true);
    try {
      await login(email, password);
      navigation.replace('Dashboard');
    } catch (e) {
      Alert.alert('Something went wrong');
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={onChangePassword}
        keyboardType="default"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={Login}
        disabled={loading}>
        <Text style={styles.textPrimary}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.replace('Signup')}
        disabled={loading}>
        <Text style={styles.textSecondary}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#00dddd',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    fontSize: 20,
    marginVertical: 4,
    borderRadius: 10,
    paddingLeft: 10,
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
  buttonSecondary: {
    backgroundColor: '#00ffff',
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

  textSecondary: {
    fontSize: 20,
    color: '#000',
  },
});
