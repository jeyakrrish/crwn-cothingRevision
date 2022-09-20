import { createContext, useEffect, useState } from "react";
import { createUserAuthDoc, getCurrentUser } from '../utils/firebase-utils';

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => { },
})

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getCurrentUser((user) => {
      if (user) createUserAuthDoc(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    setCurrentUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}