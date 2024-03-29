import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from "../firebase";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const register = async (email, password, fullName) => {
        try {
            const userCredintial = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredintial.user, { displayName: fullName });
            return userCredintial.user;
        } catch (error) {
            throw error;
        }

    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }
    const loginWithGoogle = async () => {
        try {
            const googleAuthProvider = new GoogleAuthProvider();
            return await signInWithPopup(auth, googleAuthProvider)

        } catch (error) {
            console.error('Google Sign-In Error:', error);
            throw error;
        }
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const value = { login, register, logout, forgetPassword, loginWithGoogle, user }

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContextProvider;
export const useUserAuth = () => useContext(UserAuthContext);