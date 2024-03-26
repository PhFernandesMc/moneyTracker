import { createContext, ReactNode, useState, useContext } from "react";
import { LoginContextType, userType } from "../types";

export const LoginContext = createContext<LoginContextType>({
  user: {
    userName: "",
    userEmail: "",
    userPassword: "",
    userCity: "",
    userCountry: "",
    userPhoneNumber: 0,
    isAuthenticated: false,
  },
  login: () => {},
});

export function LoginContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userType>({
    userName: "",
    userEmail: "",
    userPassword: "",
    userCity: "",
    userCountry: "",
    userPhoneNumber: 0,
    isAuthenticated: false,
  });

  const login = (email: string, password: string) => {
    if (email === "test@gmail.com" || password === "testPassword") {
      setUser({
        userName: "Pedro",
        userEmail: email,
        userPassword: password,
        userCity: "testCity",
        userCountry: "TestCountry",
        userPhoneNumber: 1111111111,
        isAuthenticated: true,
      });
      return true;
    } else {
      return false;
    }
  };

  return (
    <LoginContext.Provider value={{ user, login }}>
      {children}
    </LoginContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLoginContext = () => useContext(LoginContext);
