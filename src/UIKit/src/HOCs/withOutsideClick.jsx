/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/**
 * Добавляет к компоненту аргумент onOutsideClick,
 * который вызывается всякий раз, когда пользователь
 * отпускает кнопку мыши за пределами компонента.
 *
 * > **Важно!** у компонента `WrappedComponent` нужно добавить
 * > значение атрибута `forwardedRef` для атрибута `ref`
 * > корневого узла компонента.
 * >
 * > Например:
 * > ```jsx
 * > return <div ref={forvardedRef}>...</div>
 * > ```
 *
 * @param {React.Component} WrappedComponent Компонент
 * для готорого нужно добавить обработчик
 */
function withOutsideClick(WrappedComponent, parentRef) {
  const WrappedComponentRef = React.forwardRef((props, ref) => {
    return <WrappedComponent {...props} forwardedRef={ref} />;
  });

  function WithOutsideClick({ onOutsideClick, ...rest }) {
    const targetRef = !parentRef ? React.createRef() : parentRef;
    function onOutsideClickHandler(e) {
      if (targetRef && targetRef.current.contains(e.target)) return;
      onOutsideClick();
    }

    useEffect(() => {
      document.addEventListener('mouseup', onOutsideClickHandler);
      return function cleanup() {
        document.removeEventListener('mouseup', onOutsideClickHandler);
      };
    });

    return <WrappedComponentRef ref={targetRef} {...rest} />;
  }

  WithOutsideClick.displayName = `WithOutsideClick(${getDisplayName(
    WrappedComponent,
  )})`;

  WithOutsideClick.propTypes = {
    onOutsideClick: PropTypes.func,
  };

  WithOutsideClick.defaultProps = {
    onOutsideClick: () => {},
  };

  return WithOutsideClick;
}

export default withOutsideClick;
