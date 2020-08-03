import React, { useState } from 'react';
import './Style.scss';

const Input = (props) => {
  const { type, icon, placeholder } = props;
  const [inputVal, setInputVal] = useState('');
  const placeholderBlock =
    placeholder && inputVal === '' ? (
      <span className="Input__placeholder">{placeholder}</span>
    ) : null;

  const onInput = (value) => {
    setInputVal(value);
    // console.log(inputVal);
  };

  let inputType = type ?? 'text';
  let classes = `Input Input-${inputType} Input--${props.color}`;

  return (
    <div className={classes}>
      <input
        type={inputType}
        value={inputVal}
        onChange={(e) => onInput(e.target.value)}
      />
      {placeholderBlock}
      {props.icon && (
        <span className={`Input__icon Input__icon--${props.icon} material-icons`}>
          {props.icon}
        </span>
      )}
    </div>
  );
};

export default Input;
