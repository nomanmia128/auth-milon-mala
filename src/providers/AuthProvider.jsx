import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const name = 'pototo alu mia';
    
    const createUser = (email, password)=>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoding(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            console.log('current User', createUser);
            setUser(createUser);
            setLoding(false);
        })
        return () => {
            unSubscribe();
        }
    })

    const authInfo = {
        name,
        user,
        loding,
        createUser,
        signInUser,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/** 
 * 1. create context with null as default
 * 2. Create Provider
 * 3. set a difault value
 * 4. [ attention please !!!!]
 * 5. use the authProvider in the min.jsx
 * 6. access the children tnside the authProvider in the main.jsx
 * 7. export AuthContext
 *  * */ 