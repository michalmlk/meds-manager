import React, { createContext, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../config.ts';

type AuthContextType = {
    userData: any;
    handleSignIn: () => void;
    handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    userData: {},
    handleSignIn: () => {},
    handleLogout: () => {},
});

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthProvider: React.FC<{ children: React.ReactElement[] }> = ({
    children,
}): JSX.Element => {
    const [userData, setUserData] = useState<any>(null);

    //method to authorize user after initialize application
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
        } catch (e: any) {
            console.log(e.message);
        }
    };

    const handleLogout = async (): Promise<void> => {
        try {
            await signOut(auth);
        } catch (e: any) {
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
