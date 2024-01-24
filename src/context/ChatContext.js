import { createContext, useContext, useReducer} from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext(); //making context object

export const ChatContextProvider = ({ children }) => {
  //to access the cur.user info from A.C
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
//used by usedReducer: manage state change withing CCP
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  //update state
  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children} 
    </ChatContext.Provider>
  );
};
