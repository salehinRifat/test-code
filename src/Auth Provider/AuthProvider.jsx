import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../utils/firebase.init";
import axios from "axios";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoader(true)
        signOut(auth);
    }
    // Observe the auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoader(false)
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            } else {
                axios.post('http://localhost:5000/logOut', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }

        })
        return () => {
            unSubscribe()
        }
    }, [user?.email])

    let authInfo = { user, createUser, signInUser, logOut, loader, googleSignIn }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;