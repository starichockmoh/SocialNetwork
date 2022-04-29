import React from 'react';
import { joinClassNames } from '../Utils';
import uniqueSlug from 'unique-slug';

import Spinner from '../Spinner/Spinner';

import ArrowDownIcon from './assets/ArrowDownIcon';
import ArrowUpIcon from './assets/ArrowUpIcon';

import '../index.css';
import './SelectStatic.css';

function SelectStatic({
  className,
  disabled,
  error,
  options,
  selectedOption,
  handleSelect,
  isLoading,
  isRequired,
  label,
  placeholder,
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  function setStateHandler() {
    if (!isLoading && !disabled) {
      setIsOpen((prev) => !prev);
    }
  }

  function close() {
    setIsOpen(false);
  }

  function onOptionClicked(option) {
    return () => {
      if (option.value && option.displayValue) {
        handleSelect(option);
      }
      setIsOpen(false);
    };
  }

  return (
    <div
      className={joinClassNames([
        'select_static',
        Boolean(error) && 'status--error',
        disabled && 'status--disabled',
        className,
      ])}
    >
      {Boolean(label) && (
        <span className="select_static__label">
          <span>{label}</span>
          {isRequired && <span className="select_static__required_marker">*</span>}
        </span>
      )}
      <div
        tabIndex="0"
        className="select_static__selector"
        onClick={setStateHandler}
        onBlur={close}
      >
        {selectedOption === null ? (
          <span className="select_static__placeholder">{placeholder}</span>
        ) : (
          <span className="select_static__value">{selectedOption.displayValue}</span>
        )}
        {isLoading ? (
          <div className="select_static__spinner">
            <Spinner />
          </div>
        ) : (
          <div className="select_static__arrow">{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
        )}
      </div>
      {isOpen && (
        <div className="select_static__options">
          {options.map((item) => (
            <span
              tabIndex="0"
              key={uniqueSlug()}
              className="select_static__option"
              onClick={onOptionClicked(item)}
            >
              {item.displayValue}
            </span>
          ))}
        </div>
      )}
      <p className="select_static__error">{error}</p>
    </div>
  );
}

SelectStatic.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  isLoading: false,
  isRequired: false,
  label: '',
  handleSelect: () => {},
  options: [{ value: null, displayValue: '' }],
  selectedOption: null,
  placeholder: '',
};

export default SelectStatic;
