import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout =()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe()
    },[]);

    
    const authInfo = {
        createUser, login, user, logout, loading, updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

