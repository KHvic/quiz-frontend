/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Enabled from './Enabled';
import Disabled from './Disabled';

function Button({ enabled, text, click }) {
  if (enabled) return <Enabled onClick={click}>{text}</Enabled>;
  return <Disabled>{text}</Disabled>;
}

Button.propTypes = {
  enabled: PropTypes.bool,
  text: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
