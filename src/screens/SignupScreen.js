import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../contexts/AuthContext';

const SignupScreen = ({navigation}) => {
  const {signup, currentUser} = useAuth();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const Signup = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert('Password did not match!!');
      setLoading(false);
      return;
    }
    try {
      signup(email, password);
      navigation.replace('Dashboard');
    } catch (e) {
      Alert.alert('Something went wrong!!');
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     if (currentUser) {
  //       navigation.replace('Dashboard');
  //     } else {
  //       navigation.replace('Login');
  //     }
  //   }, [])
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
      <TextInput
        secureTextEntry={true}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
        keyboardType="default"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.buttonPrimary}
        disabled={loading}
        onPress={Signup}>
        <Text style={styles.textPrimary}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        disabled={loading}
        onPress={() => navigation.replace('Login')}>
        <Text style={styles.textSecondary}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
