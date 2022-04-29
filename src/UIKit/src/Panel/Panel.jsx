import './Panel.css';

import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function Panel({
  className,
  title,
  children,
  TitleBarRightComponent,
  TitleBarLeftComponent,
}) {
  return (
    <div className={joinClassNames(['panel', className])}>
      {title || TitleBarLeftComponent || TitleBarRightComponent ? (
        <div className="panel__title_bar">
          {title ? <h2 className="panel__title">{title}</h2> : null}
          <div className="panel__title_left">{TitleBarLeftComponent}</div>
          <div className="panel__title_right">{TitleBarRightComponent}</div>
        </div>
      ) : null}
      <div className="panel__body">{children}</div>
    </div>
  );
}

Panel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  TitleBarLeftComponent: PropTypes.node,
  TitleBarRightComponent: PropTypes.node,
};

Panel.defaultProps = {
  className: undefined,
  title: undefined,
  children: undefined,
  TitleBarLeftComponent: undefined,
  TitleBarRightComponent: undefined,
};

export default Panel;
