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

function QuizContainer({
  description,
  options,
  answers,
  selection,
  onSelectChoice,
  reviewMode,
}) {
  return (
    <CenteredContentWrapper>
      <Description description={description} />
      <McqsWrapper>
        {options.map((option, idx) => (
          <McqSelect
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            choices={option}
            answer={answers[idx]}
            selected={selection[idx]}
            clickChoice={choice => onSelectChoice(idx, choice)}
            reviewMode={reviewMode}
          />
        ))}
      </McqsWrapper>
    </CenteredContentWrapper>
  );
}

QuizContainer.propTypes = {
  description: PropTypes.string,
  options: PropTypes.array,
  selection: PropTypes.array,
  answers: PropTypes.array,
  onSelectChoice: PropTypes.func,
  reviewMode: PropTypes.bool,
};

export default QuizContainer;
