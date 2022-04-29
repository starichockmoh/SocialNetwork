import './Notification.css';

import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';
import Toast from './Toast';

function Notification({ messages = [], onClose = () => {} }) {
  return messages.length > 0 ? (
    <aside className={joinClassNames(['notification__wrapper'])}>
      {messages.map(({ message, type, notificationId }) => {
        return (
          <Toast
            message={message}
            type={type}
            key={notificationId}
            messageId={notificationId}
            onClose={onClose}
          />
        );
      })}
    </aside>
  ) : null;
}

Notification.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      notificationId: PropTypes.string.isRequired,
      message: PropTypes.string,
      type: PropTypes.oneOf(['success', 'warning', 'error']),
    }),
  ),
  onClose: PropTypes.func,
};

Notification.defaultProps = {
  messages: [],
  onClose: () => {},
};

export default Notification;
