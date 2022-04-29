import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';
import { ModalContext } from './ModalContext';
import Glyph from '../Glyph';

function ModalWindow({ className, children, isHidden = false }) {
  const modalContext = useContext(ModalContext);
  return (
    <div
      className={joinClassNames([
        'modal_window',
        { 'modal_window--hidden': isHidden },
        className,
      ])}
    >
      <div className="modal_window__header">
        <button
          type="button"
          className="modal_window__close_button"
          onClick={() => modalContext.onClose()}
        >
          <Glyph name="Cross" className="modal_window__button_glyph" />
        </button>
      </div>
      {children}
    </div>
  );
}

ModalWindow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isHidden: PropTypes.bool.isRequired,
};

ModalWindow.defaultProps = {
  className: undefined,
  children: undefined,
};

export default ModalWindow;
