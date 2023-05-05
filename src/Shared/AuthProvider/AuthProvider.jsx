import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import  { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext=createContext(null)
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const[loading,setLoading]=useState(true)
    const [user,setUser]=useState('');
    const googleProvider = new GoogleAuthProvider()
    const gitprovider = new GithubAuthProvider
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
    },[])
    const login=(email,password)=>{
         return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
       return signInWithPopup(auth,googleProvider)
    }
    const githubSignIn=()=>{
        return signInWithPopup(auth,gitprovider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const passwordreset=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const authInfo={
        user,
        loading,
        login,
        createUser,
        googleSignIn,
        githubSignIn,
        logOut,
        passwordreset
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;