/**
 *
 * Choice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';
import Unselected from './Unselected';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Disabled from './Disabled';
import {
  SelectedType,
  UnselectedType,
  DisabledType,
  CorrectType,
  IncorrectType,
} from './constants';

function Choice({ choice, type }) {
  return TypeToButton(choice, type);
}

function TypeToButton(choice, type) {
  switch (type) {
    case SelectedType:
      return <Selected>{choice}</Selected>;
    case UnselectedType:
      return <Unselected>{choice}</Unselected>;
    case CorrectType:
      return <Correct>{choice}</Correct>;
    case IncorrectType:
      return <Incorrect>{choice}</Incorrect>;
    case DisabledType:
      return <Disabled>{choice}</Disabled>;
    default:
      return <Disabled>{choice}</Disabled>;
  }
}

Choice.propTypes = {
  choice: PropTypes.string,
  type: PropTypes.string,
};

export default Choice;
