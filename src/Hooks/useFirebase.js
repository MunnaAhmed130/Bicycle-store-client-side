import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // const navigate = useNavigate();

  //user registration
  const registerWithEmail = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to the database
        saveUser(email, name);
        console.log(user);
        // update firebase profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => setError(error.message));

        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  // use Login
  const loginWithEmail = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || "/";
        history(destination);
        setError("");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveGoogleUser(user.email, user.displayName);
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // user log out
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("http://localhost:4000/users", user).then();
  };
  const saveGoogleUser = (email, displayName) => {
    const user = { email, displayName };
    axios.put("http://localhost:4000/users", user).then();
  };

  return {
    user,
    error,
    loading,
    admin,
    registerWithEmail,
    loginWithEmail,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
