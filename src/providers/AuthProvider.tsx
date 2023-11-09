import React, { createContext, useContext, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { firebaseConfig } from '../../config';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});
export const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
    const [userData, setUserData] = useState<any>(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserData(user);
        } else {
            setUserData(null);
        }
    });

    const handleSignIn = async (): Promise<void> => {
        try {
            await signInWithPopup(auth, provider);
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleLogout = async (): Promise<void> => {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                userData,
                handleLogout,
                handleSignIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error('useAuth needs to be in child of AuthProvider');
    }

    return auth;
};
