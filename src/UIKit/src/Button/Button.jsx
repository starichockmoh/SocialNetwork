import '../index.css';
import './Button.css';

import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';


const buttonClassNames = {
  0: '',
  1: 'button--primary',
};

function Button({
  className,
  children,
  primary = false,
  submit = false,
  disabled,
  onClick = () => {},
}) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={joinClassNames([
        'button',
        buttonClassNames[Number(primary)],
        className,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.bool,
  submit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: 'Кнопка',
  primary: false,
  submit: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
