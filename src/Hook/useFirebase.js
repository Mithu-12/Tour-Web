import FirebaseInit from "../Firebase/Firebase.init";
import {getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged,
} from "firebase/auth";

import { useEffect, useState } from "react";
FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    setIsLoading(true)
  return signInWithPopup(auth, googleProvider)
      
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        
      }
      setIsLoading(false);
    });
  }, []);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(()=> setIsLoading(false))
  };

  const handleUserRegister = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
      
  };

  const handleUserLogin = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
      
  };

  return {
    isLoading,
    handleLogout,
    handleUserRegister,
    handleGoogleLogin,
    handleUserLogin,
    user,
    auth
  };
};

export default useFirebase;