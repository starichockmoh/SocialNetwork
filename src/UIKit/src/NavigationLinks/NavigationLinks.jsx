import './NavigationLinks.css';

import React from 'react';
import PropTypes from 'prop-types';
import uniqueSlug from 'unique-slug';
import { NavLink } from 'react-router-dom';

import { joinClassNames } from '../Utils';


function NavigationLinks({ className, links = [] }) {
  return (
    <nav className={joinClassNames(['navigation_links', className])}>
      <ul className="navigation_links__list">
        {links.map((link) => (
          <li key={uniqueSlug()} className="navigation_links__item">
            <NavLink
              to={link.to}
              className="navigation_links__link"
              activeClassName="navigation_links--active"
              exact
            >
              {link.caption}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavigationLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ caption: PropTypes.string, to: PropTypes.string }),
  ).isRequired,
  className: PropTypes.string,
};

NavigationLinks.defaultProps = {
  className: undefined,
};

export default NavigationLinks;
