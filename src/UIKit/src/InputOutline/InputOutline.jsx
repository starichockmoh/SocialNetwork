import React from 'react';
import { joinClassNames } from '../Utils';

import '../index.css';
import './InputOutline.css';

function InputOutline({
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
  type,
  value,
}) {
  return (
    <div
      className={joinClassNames([
        'input_outline',
        Boolean(error) && 'status--error',
        disabled && 'status--disabled',
        className,
      ])}
    >
      <div tabIndex="0" className="input_outline__input">
        <input
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          autoComplete={autoComplete}
          disabled={disabled}
        />
        {Boolean(glyph) && !Boolean(onGlyphClick) && (
          <div className="input_outline__icon">{glyph()}</div>
        )}
        {Boolean(glyph) && Boolean(onGlyphClick) && (
          <button className="input_outline__icon input_outline__button" onClick={onGlyphClick}>
            {glyph()}
          </button>
        )}
        <label className="input_outline__label" htmlFor={name}>
          <span>{label}</span>
          {isRequired && <span className="input_outline__required_marker">*</span>}
        </label>
      </div>
      <p className="input_outline__error">{error}</p>
    </div>
  );
}

InputOutline.defaultProps = {
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
  type: 'text',
};

export default InputOutline;
