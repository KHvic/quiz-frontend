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

function Header({ title, title2, exitIcon }) {
  return (
    <Div>
      <Span>{title}</Span>
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
};

export default Header;
