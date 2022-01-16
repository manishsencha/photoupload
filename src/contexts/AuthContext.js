import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();
import {auth} from '../../firebase';
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, user => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    });
    return () => subscriber;
  }, []);
  const value = {login, signup, logOut, currentUser};
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
