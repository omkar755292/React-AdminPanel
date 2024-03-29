import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    googleAuthProvider,
    signInWithPopup,
    updateProfile
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
            return alert(error.message);
        }

    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const forgetPassword = () => { }
    const logInWithGoogle = () => { }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const value = { login, register, forgetPassword, logInWithGoogle, user }

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContextProvider;
export const useUserAuth = () => useContext(UserAuthContext);