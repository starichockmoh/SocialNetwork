import './Modal.css';

import React, { useRef, useState } from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';

import { joinClassNames } from '../Utils';

import { ModalContext } from './ModalContext';
import ModalWindow from './ModalWindow';

function Modal({ className, children, onModalClose = () => {} }) {
  const [isShown, setIsShown] = useState(true);
  const modalAreaRef = useRef(document.querySelector('#root_modals'));
  /** componentDidMount */
  // useEffect(() => {
  //   if (modalAreaRef.current == null) {
  //     modalAreaRef.current = document.createElement('div');
  //     modalAreaRef.current.classList.add('float_body');
  //     document.querySelector('body').appendChild(modalAreaRef.current);
  //   }
  // }, []);
  return reactDom.createPortal(
    <ModalContext.Provider
      value={{
        onClose: () => setIsShown(false),
      }}
    >
      <div
        className={joinClassNames([
          'modal',
          { 'modal--hidden': !isShown },
          className,
        ])}
        onAnimationEnd={() => onModalClose()}
      >
        <ModalWindow isHidden={!isShown}>{children}</ModalWindow>
      </div>
    </ModalContext.Provider>,
    modalAreaRef.current,
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onModalClose: PropTypes.func,
};

Modal.defaultProps = {
  className: undefined,
  children: undefined,
  onModalClose: () => {},
};

export default Modal;
