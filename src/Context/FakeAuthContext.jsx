import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logIn":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logOut":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
};
const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const logIn = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "logIn", payload: FAKE_USER });
  };

  const logOut = () => {
    dispatch({ type: "logOut" });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Authcontext is used outside the AuthProvider...");
  return context;
};

export { useAuth, AuthProvider };
