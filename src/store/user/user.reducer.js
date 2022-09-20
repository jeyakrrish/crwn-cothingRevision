import { USER_ACTION_TYPE } from "./user.type";

const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
}

//!  {type, payload} = action