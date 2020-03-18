/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';
import Span from './Span';

function Header({ title, title2 }) {
  return (
    <Div>
      <Span>{title}</Span>
      <Span>{title2}</Span>
    </Div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
};

export default Header;
