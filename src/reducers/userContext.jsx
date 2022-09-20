import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/createAction";
import { createUserAuthDoc, getCurrentUser } from '../utils/firebase-utils';

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => { },
})

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
}

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload }

    default:
      throw new Error("Unkown Action typed deducted in userReducer");
  }
}

export const UserContextProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    const unsubscribe = getCurrentUser((user) => {
      if (user) createUserAuthDoc(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [])

  const setCurrentUser = (user) =>
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));

  const value = {
    currentUser,
    setCurrentUser,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}