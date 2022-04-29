import React from 'react';
import { joinClassNames } from '../Utils';
import uniqueSlug from 'unique-slug';

import Spinner from '../Spinner/Spinner';

import ArrowDownIcon from '../SelectStatic/assets/ArrowDownIcon';
import ArrowUpIcon from '../SelectStatic/assets/ArrowUpIcon';

import '../index.css';
import './SelectOutline.css';

function SelectOutline({
  className,
  disabled,
  error,
  options,
  selectedOption,
  handleSelect,
  isLoading,
  isRequired,
  label,
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
    <div className="select_container">
      <div
        className={joinClassNames([
          'select_outline',
          Boolean(error) && 'status--error',
          disabled && 'status--disabled',
          className,
        ])}
      >
        <div
          tabIndex="0"
          className="select_outline__selector"
          onClick={setStateHandler}
          onBlur={close}
        >
          {Boolean(selectedOption) ? (
            <span className="select_outline__value">{selectedOption.displayValue}</span>
          ) : (
            <span className="select_outline__value"> </span>
          )}
          {isLoading ? (
            <div className="select_outline__spinner">
              <Spinner />
            </div>
          ) : (
            <div className="select_outline__arrow">
              {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </div>
          )}
        </div>
        {isOpen && (
          <div className="select_outline__options">
            {options.map((item) => (
              <span
                tabIndex="0"
                key={uniqueSlug()}
                className="select_outline__option"
                onClick={onOptionClicked(item)}
              >
                {item.displayValue}
              </span>
            ))}
          </div>
        )}
        <span
          className={joinClassNames([
            'select_outline__label',
            selectedOption !== null && 'status--filled',
          ])}
        >
          <span>{label}</span>
          {isRequired && <span className="select_outline__required_marker">*</span>}
        </span>
      </div>
      <p className="select_outline__error">{error}</p>
    </div>
  );
}

SelectOutline.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  isLoading: false,
  isRequired: false,
  label: 'Label',
  handleSelect: () => {},
  options: [{ value: null, displayValue: '' }],
  selectedOption: null,
};

export default SelectOutline;
