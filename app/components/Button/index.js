/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Enabled from './Enabled';
import Correct from './Correct';
import Incorrect from './Incorrect';

function Button({ enabled, text, click, type }) {
  if (type === 'success') {
    return (
      <Correct onClick={click} on={enabled}>
        {text}
      </Correct>
    );
  }
  if (type === 'error') {
    return (
      <Incorrect onClick={click} on={enabled}>
        {text}
      </Incorrect>
    );
  }
  return (
    <Enabled onClick={click} on={enabled}>
      {text}
    </Enabled>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  enabled: PropTypes.bool,
  text: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
