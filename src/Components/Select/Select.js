import React, { useState, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import './Style.scss';

const Select = (props) => {
  const [currentValue, setCurrentValue] = useState({
    title: '',
    value: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const selectHandler = (e) => {
    setCurrentValue({
      title: e.target.innerText,
      value: e.target.dataset.value,
    });
    setIsOpen(false);
  };

  useEffect(
    (prev) => {
      if (props.onSelected) {
        props.onSelected(currentValue);
      }
    },
    [currentValue]
  );

  const SelectList = () => {
    if (isOpen) {
      return (
        <ul className="Select__list">
          {props.items.map((item, idx) => (
            <li
              className="Select__list__item"
              key={idx}
              data-value={item.value}
              onClick={(e) => selectHandler(e)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      );
    }
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Select ${isOpen ? 'Select--open' : ''}`}>
      <div className="Select__head" onClick={(e) => toggleList()}>
        <span className="Select__value">
          <input
            className="Select__value-input"
            readOnly
            autoComplete="off"
            value={currentValue.value}
          />
        </span>
        <span className="Select__selected-value">{currentValue.title}</span>
      </div>
      {SelectList()}
    </div>
  );
};

export default Select;
