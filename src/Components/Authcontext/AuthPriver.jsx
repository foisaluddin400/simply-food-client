import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import Auth from "../firebase/firebase"
import axios from "axios";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


export const AuthPriver = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [card, setcard] = useState([])

  fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setcard(data)

    )
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password)
  }

  const googleSingIn = () => {
    setLoading(true)
    return signInWithPopup(Auth, googleProvider)
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(Auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, currentUser => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email: userEmail}
      console.log('current user', currentUser);
      setUser(currentUser);
      setLoading(false)

      //jwt user exist korle issue token
      if(currentUser){
        
          axios.post('http://localhost:5000/jwt', loggedUser,{withCredentials : true})
          .then(res=> {
            console.log('token response', res.data);
          
          })
      }
      //logout l korar jonno 
      else{
        axios.post('http://localhost:5000/logout', loggedUser,{withCredentials : true})
        .then(res=> {
          console.log(res.data);
        })
      }
    })
    return () => {
      unSubscribe();
    }
  }, [])
  
  const logOut = () => {

    return signOut(Auth)
  }

  const AuthInfo = { card, user, loading, createUser, signInUser, logOut, googleSingIn }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
