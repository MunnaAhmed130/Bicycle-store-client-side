import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.init';
import axios from 'axios';

// initialize firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //user registration
    const registerWithEmail = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                saveUser(email, name);
                console.log(user)
                // update firebase profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    // use Login
    const loginWithEmail = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history(destination);
                setError('');
                console.log(user)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveGoogleUser(user.email, user.displayName);
                const destination = location?.state?.from || '/';
                history(destination);
                setError('');
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://agile-island-88744.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // user log out
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setLoading(false))
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://agile-island-88744.herokuapp.com/users', user)
            .then()
    }
    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        axios.put('https://agile-island-88744.herokuapp.com/users', user)
            .then()
    }

    return {
        user,
        error,
        loading,
        admin,
        registerWithEmail,
        loginWithEmail,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;