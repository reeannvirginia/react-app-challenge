import React from 'react';
import Input from '../input/Input.component';
import classes from '../Login.module.scss';

type SignUpProps = {
  handleSignUp: (e: React.FormEvent<Element>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleForm: () => void;
  loading: boolean;
};

const SignUp = ({ handleSignUp, handleInput, toggleForm, loading }: SignUpProps) => {
  return (
    <div className={classes.signUpCard}>
      <form onSubmit={handleSignUp}>
        <h4>Sign-Up</h4>
        <Input id="signUp" placeholder="full name" required onChange={handleInput} />
        <Input id="signUp" placeholder="email" required onChange={handleInput} />
        <Input id="signUp" placeholder="password" type="password" required minLength={8} onChange={handleInput} />
        {loading ? (
          <div className={classes.loading}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        ) : (
          <input className={classes.submitBtn} type="submit" value="Sign-up" />
        )}
      </form>
      <p>
        Already registered?{' '}
        <span className={classes.swapForm} onClick={toggleForm}>
          Sign-In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
