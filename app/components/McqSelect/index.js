/**
 *
 * McqSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Choice from '../Choice';
import divStyle from './divStyle';

function McqSelect({ choices, answer }) {
  const Div = styled.div`
    ${divStyle}
  `;
  return (
    <Div>
      {choices.map(choice => (
        <Choice choice={choice} />
      ))}
    </Div>
  );
}

McqSelect.propTypes = {
  choices: PropTypes.array,
  answer: PropTypes.array,
};

export default McqSelect;
