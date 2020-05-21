import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import Login from './Login.component';

// if a user exists in localStorage already, they will be immediately directed to the sign-in form
// if not, the user will "register" first, then immediately log in with the provided credentials

const LoginContainer = () => {
  const { authenticateUser, registerUser, hasRegistered } = useContext(UserContext)!;
  const [signInForm, setSignInForm] = useState(hasRegistered);
  const [loading, setLoading] = useState(false);
  // used for animation
  const [showForm, setForm] = useState(true);
  const [state, setState] = useState({});

  const toggleForm = () => setSignInForm((prevVal) => !prevVal);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUp = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/signup', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
      const newUser = await res.json();
      registerUser(newUser);
      setSignInForm(true);
      setLoading(false);
    } catch (e) {
      // pretending my sophisticated backend is handling errors :)
      console.error(e);
    }
  };

  const handleSignIn = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
      const userCredentials = await res.json();
      if (authenticateUser(userCredentials)) {
        return setForm(false);
      }
      throw Error('email or password does not match');
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <Login
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
      toggleForm={toggleForm}
      handleInput={handleInput}
      loading={loading}
      signInForm={signInForm}
      showForm={showForm}
    />
  );
};

export default LoginContainer;
