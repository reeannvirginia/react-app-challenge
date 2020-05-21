import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import SignIn from './forms/SignIn.component';
import SignUp from './forms/SignUp.component';
import classes from './Login.module.scss';

type LoginProps = {
  handleSignIn: (e: React.FormEvent<Element>) => void;
  handleSignUp: (e: React.FormEvent<Element>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleForm: () => void;
  loading: boolean;
  showForm: boolean;
  signInForm: boolean;
};

const Login = ({ handleSignIn, handleSignUp, handleInput, toggleForm, showForm, signInForm, loading }: LoginProps) => {
  return (
    <div className={classes.loginContainer}>
      <CSSTransition classNames="slide" appear in={showForm} timeout={{ appear: 100, enter: 100, exit: 200 }}>
        <div key="form" className={classes.formContainer}>
          <div className={classNames(classes.formComponent, { [classes.flipCard]: signInForm })}>
            <SignUp loading={loading} handleSignUp={handleSignUp} handleInput={handleInput} toggleForm={toggleForm} />
            <SignIn loading={loading} handleSignIn={handleSignIn} handleInput={handleInput} toggleForm={toggleForm} />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Login;
