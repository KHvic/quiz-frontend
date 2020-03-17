/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Enabled from './Enabled';
import Disabled from './Disabled';

function Button({ enabled, text }) {
  if (enabled) return <Enabled>{text}</Enabled>;
  return <Disabled>{text}</Disabled>;
}

Button.propTypes = {
  enabled: PropTypes.bool,
  text: PropTypes.string,
};

export default Button;
