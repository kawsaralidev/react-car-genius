import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setLoading(false))
    }
    return {
        user,
        loading,
        googleSignIn,
        logOut
    }
};

export default useFirebase;