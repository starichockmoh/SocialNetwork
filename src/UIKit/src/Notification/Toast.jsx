import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MarkError from './MarkError';
import MarkSuccess from './MarkSuccess';
import MarkWarning from './MarkWarning';
import Glyph from '../Glyph';
import { joinClassNames } from '../Utils';

const MARKS = {
  error: MarkError,
  success: MarkSuccess,
  warning: MarkWarning,
};

const TOAST_STYLES = {
  error: 'toast--error',
  success: 'toast--success',
  warning: 'toast--warning',
};

function Toast({ message, type, messageId, onClose = () => {} }) {
  const Icon = MARKS[type];
  const toastRef = useRef();
  return (
    <div
      ref={toastRef}
      className={joinClassNames(['toast', TOAST_STYLES[type]])}
      onAnimationEnd={(e) => {
        if (e.target.classList.contains('toast--close')) onClose(messageId);
      }}
    >
      <div className="toast__mark_area">
        <Icon className="toast__icon" />
      </div>
      <div className="toast__message">{message}</div>
      <button
        type="button"
        className="toast__close_button"
        onClick={() => toastRef.current.classList.add('toast--close')}
      >
        <Glyph name="Cross" />
      </button>
    </div>
  );
}

Toast.propTypes = {
  messageId: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
  onClose: PropTypes.func,
};

Toast.defaultProps = {
  message: '',
  type: 'success',
  onClose: () => {},
};

export default Toast;
