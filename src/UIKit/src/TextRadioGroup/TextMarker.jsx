import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function TextMarker({ checked, className, caption }) {
  return (
    <span
      className={joinClassNames([
        'text_marker',
        className,
        { 'text_marker--checked': checked },
      ])}
    >
      {caption}
    </span>
  );
}

TextMarker.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  caption: PropTypes.string,
};

TextMarker.defaultProps = {
  checked: false,
  className: undefined,
  caption: 'Кнопка',
};

export default TextMarker;
