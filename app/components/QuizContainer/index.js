/**
 *
 * Quiz
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CenteredContentWrapper from '../CenteredContentWrapper';
import McqSelect from '../McqSelect';
import Description from '../Description';
import McqsWrapper from '../McqsWrapper';

function QuizContainer({ description, options, answer }) {
  return (
    <CenteredContentWrapper>
      <Description description={description} />
      <McqsWrapper>
        {options.map((option, idx) => (
          <McqSelect choices={option} answer={answer[idx]} />
        ))}
      </McqsWrapper>
    </CenteredContentWrapper>
  );
}

QuizContainer.propTypes = {
  description: PropTypes.string,
  options: PropTypes.array,
  answer: PropTypes.array,
};

export default QuizContainer;
