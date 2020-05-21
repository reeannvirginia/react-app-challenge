import React, { useState, FunctionComponent } from 'react';

type ContextProps = {
  authenticated: boolean;
  authenticateUser: (user: UserCredentials) => boolean;
  hasRegistered: boolean;
  registerUser: (user: UserCredentials) => void;
};

type UserCredentials = {
  email: string;
  password: string;
};

export const UserContext = React.createContext<ContextProps | undefined>(undefined);

export const ContextProvider: FunctionComponent = ({ children }) => {
  const storedUser: string = localStorage.getItem('user') || '';
  const existingUser: UserCredentials = storedUser && JSON.parse(storedUser);
  const hasUser = sessionStorage.getItem('loggedIn');
  const [hasRegistered, setRegistered] = useState(!!existingUser);
  const [authenticated, setAuthenticated] = useState(!!hasUser);

  const registerUser = (newUser: UserCredentials) => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setRegistered(true);
  };

  const authenticateUser = ({ email, password }: UserCredentials) => {
    const isUser = existingUser.email === email && existingUser.password === password;
    if (isUser) {
      sessionStorage.setItem('loggedIn', String(isUser));
      setTimeout(() => {
        setAuthenticated(isUser);
      }, 1500);
    }
    return isUser;
  };

  return (
    <UserContext.Provider value={{ authenticated, authenticateUser, hasRegistered, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
