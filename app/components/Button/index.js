/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Enabled from './Primary';
import Correct from './Success';
import Incorrect from './Error';
import Default from './Default';

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
  if (type === 'primary') {
    return (
      <Enabled onClick={click} on={enabled}>
        {text}
      </Enabled>
    );
  }
  return (
    <Default onClick={click} on={enabled}>
      {text}
    </Default>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  enabled: PropTypes.bool,
  text: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
