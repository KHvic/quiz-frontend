/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';
import Span from './Span';

function Header(props) {
  const { title } = props;
  return (
  <Div>
    <Span>{title}</Span>  
  </Div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
