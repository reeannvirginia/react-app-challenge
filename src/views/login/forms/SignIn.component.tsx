import React from 'react';
import Input from '../input/Input.component';
import classes from '../Login.module.scss';

type SignInProps = {
  handleSignIn: (e: React.FormEvent<Element>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleForm: () => void;
  loading: boolean;
};

const SignIn = ({ handleSignIn, handleInput, toggleForm, loading }: SignInProps) => {
  return (
    <div className={classes.signInCard}>
      <form onSubmit={handleSignIn}>
        <h4>
          Welcome back! <br /> Please sign in{' '}
        </h4>
        <Input id="signIn" placeholder="email" required onChange={handleInput} />
        <Input id="signIn" placeholder="password" type="password" required minLength={8} onChange={handleInput} />
        {loading ? (
          <div className={classes.loading}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        ) : (
          <input id="signIn" className={classes.submitBtn} type="submit" value="Sign-in" />
        )}
      </form>
      <p>
        Not registered?{' '}
        <span className={classes.swapForm} onClick={toggleForm}>
          Sign-up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
