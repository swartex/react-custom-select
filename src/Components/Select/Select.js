import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { TransitionGroup } from 'react-transition-group';
import style from './select.module.scss';

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

  const onSelectItem = (e) => {
    if (e.keyCode === 13) {
      setCurrentValue({
        title: e.target.innerText,
        value: e.target.dataset.value,
      });
      setIsOpen(false);
    }
  };

  const SelectList = () => {
    if (isOpen) {
      return (
        <ul className={style.list}>
          {props.items.map((item, idx) => (
            <li
              className={style.list__item}
              key={idx}
              data-value={item.value}
              onClick={(e) => selectHandler(e)}
              tabIndex="1"
              onKeyDown={onSelectItem}
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

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={classNames(style.element, {
        [style.open]: isOpen,
      })}
    >
      <div
        className={style.head}
        onClick={(e) => toggleList()}
        onKeyDown={onKeyDown}
        tabIndex="1"
      >
        <span className={style.value}>
          <input
            className={style.value_input}
            readOnly
            autoComplete="off"
            value={currentValue.value}
          />
        </span>
        <span className={style.selectedValue}>{currentValue.title}</span>
      </div>
      {SelectList()}
    </div>
  );
};

export default Select;
