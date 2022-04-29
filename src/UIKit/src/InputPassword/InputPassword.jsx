import React from 'react';

import InputStatic from '../InputStatic/InputStatic';
import ShowPasswordIcon from './assets/ShowPasswordIcon';
import NoShowPasswordIcon from './assets/NoShowPasswordIcon';

function InputPassword({
  className,
  disabled,
  error,
  isRequired,
  label,
  name,
  onChange,
  placeholder,
  value,
}) {
  const [isVisible, setVisible] = React.useState(false);

  function visibleHandler() {
    if (disabled) {
      return;
    }
    setVisible((prev) => !prev);
  }

  function inputType() {
    if (isVisible) {
      return 'text';
    }
    return 'password';
  }

  function glyphType() {
    if (isVisible) {
      return NoShowPasswordIcon;
    }
    return ShowPasswordIcon;
  }

  return (
    <InputStatic
      className={className}
      disabled={disabled}
      error={error}
      glyph={glyphType()}
      isRequired={isRequired}
      label={label}
      name={name}
      onChange={onChange}
      onGlyphClick={visibleHandler}
      placeholder={placeholder}
      value={value}
      type={inputType()}
    />
  );
}

export default InputPassword;
