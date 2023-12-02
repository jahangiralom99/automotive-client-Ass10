import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // create a new  User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  //  login
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update profile 
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    })
  }

    // google LogIn
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // manage users
  useEffect(() => {
    const unSubscribedUsers = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribedUsers();
    };
  }, []);

    const authInfo = {
        user,
        googleLogIn,
        createUser,
        logInUser,
        logOut,
        updateName,
        loading,
      

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;