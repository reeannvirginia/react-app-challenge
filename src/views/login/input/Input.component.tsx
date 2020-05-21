import React, { useState } from 'react';
import classNames from 'classnames';
import classes from './Input.module.scss';

type InputProps = {
  id: string;
  placeholder: string;
  required: boolean;
  type?: string;
  minLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ id, placeholder, required, type, onChange, minLength }: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const toggleFocus = (e: any) => {
    e.stopPropagation();
    setFocused(!focused);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className={classNames(classes.inputContainer, { [classes.isFocused]: focused || value })}>
      <input
        onFocus={toggleFocus}
        required={required}
        onBlur={() => setFocused(false)}
        id={id + placeholder}
        name={placeholder}
        onChange={handleChange}
        value={value}
        className={classes.inputField}
        type={type}
        minLength={minLength}
      />
      <label htmlFor={id + placeholder} className={classes.placeholder}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
