/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ExitIcon from '../ExitIcon';
import Div from './Div';
import Span from './Span';

function Header({ title, title2, exitIcon, iconClass }) {
  return (
    <Div>
      <Div>
        {iconClass && <Span className={iconClass} aria-hidden="true" />}
        <Span>{title}</Span>
      </Div>
      <Div>
        <Span>{title2}</Span>
        {exitIcon && <ExitIcon />}
      </Div>
    </Div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
  exitIcon: PropTypes.bool,
  iconClass: PropTypes.string,
};

export default Header;
