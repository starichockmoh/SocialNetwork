import React from 'react';
import { joinClassNames } from '../Utils';

import '../index.css';
import './InputStatic.css';

function InputStatic({
  autoComplete,
  className,
  disabled,
  error,
  glyph,
  isRequired,
  label,
  name,
  onChange,
  onGlyphClick,
  placeholder,
  type,
  value,
}) {
  return (
    <div
      className={joinClassNames([
        'input_static',
        Boolean(error) && 'status--error',
        disabled && 'status--disabled',
        className,
      ])}
    >
      {Boolean(label) && (
        <label className="input_static__label" htmlFor={name}>
          <span>{label}</span>
          {isRequired && <span className="input_static__required_marker">*</span>}
        </label>
      )}
      <div tabIndex="0" className="input_static__input">
        <input
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          label={label}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
        />
        {Boolean(glyph) && !Boolean(onGlyphClick) && (
          <div className="input_static__icon">
            {glyph()}
          </div>
        )}
        {Boolean(glyph) && Boolean(onGlyphClick) && (
          <button className="input_static__icon input_static__button" onClick={onGlyphClick}>
            {glyph()}
          </button>
        )}
      </div>
      <p className="input_static__error">{error}</p>
    </div>
  );
}

InputStatic.defaultProps = {
  autoComplete: 'on',
  className: '',
  disabled: false,
  error: '',
  glyph: null,
  isRequired: false,
  label: '',
  name: 'InitialName',
  onChange: () => {},
  onGlyphClick: null,
  placeholder: '',
  type: 'text',
};

export default InputStatic;
