import React from 'react';
import classnames from 'classnames';
import { useInput } from '../../hooks';
import './Style.scss';

const Input = (props) => {
  const { type, icon, placeholder, color } = props;
  const inputValue = useInput();

  return (
    <div className={classnames('Input', [`Input--${type || 'text'}`])}>
      <input type={type || 'text'} {...inputValue} />
      {!placeholder ||
        (!inputValue.value && (
          <span className="Input__placeholder">{placeholder}</span>
        ))}
      {icon && (
        <span
          className={classnames('Input__icon', {
            [`Input__icon--${icon}`]: icon,
          })}
        >
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
