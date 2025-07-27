import React, { createContext, useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email registration 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Email login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // observer 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log('Observing user from Auth Provider:', currentUser);
      setUser(currentUser);
      setLoading(false);
    })

    return (() => {
      unsubscribe();
    })
  }, [])

  const authInfo = { user, logOut, createUser, loginUser, loading };


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;