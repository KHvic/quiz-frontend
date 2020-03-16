/**
 *
 * Description
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledDesc from './StyledDesc';

function Description({ description }) {
  return <StyledDesc>{description}</StyledDesc>;
}

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
