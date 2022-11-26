import React, { createContext, useEffect, useState } from 'react';
import app from '../FirebaseConfig/Firebase.Config'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    // create user 
    const createUser = (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// update user
    const updateUserProfile = (name, photo, role) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
          role: role,
        })
      }

      const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
  
// log out
  
    const logOut = ()=>{
        return signOut(auth)
    }

    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user observing')
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
    }, [])

// context
    const authInfo= {loading, createUser, updateUserProfile,providerLogin, googleProvider, login, user, logOut}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;