/**
 *
 * QuizPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { setSubcat, selectQuestionChoice } from './actions';
import {
  makeSelectQuestions,
  makeSelectSubcat,
  makeSelectCurrentQuestion,
  makeSelectSelections,
  makeSelectReviewMode,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import QuizContainer from '../../components/QuizContainer';
import Pagination from '../../components/Pagination';

export function QuizPage({
  changeSubcat,
  selectOptionChoice,
  match,
  questions,
  selections,
  questionIndex,
  reviewMode,
}) {
  useInjectReducer({ key: 'quizPage', reducer });
  useInjectSaga({ key: 'quizPage', saga });

  useEffect(() => {
    changeSubcat(match.params.subcat);
  }, []);

  return (
    <div>
      <Helmet>
        <title>QuizPage</title>
        <meta name="description" content="Description of QuizPage" />
      </Helmet>
      <h1>Quiz Page</h1>
      {/* TODO: Add error handling */}
      {questionIndex < questions.length && (
        <div>
          <QuizContainer
            {...questions[questionIndex]}
            onSelectChoice={selectOptionChoice}
            reviewMode={reviewMode}
            selection={selections[questionIndex]}
          />
          <Pagination
            questionIndex={questionIndex}
            questionCount={questions.length}
          />
        </div>
      )}
    </div>
  );
}

QuizPage.propTypes = {
  changeSubcat: PropTypes.func.isRequired,
  selectOptionChoice: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  questions: PropTypes.array,
  selections: PropTypes.array,
  questionIndex: PropTypes.number,
  reviewMode: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
  selections: makeSelectSelections(),
  questionIndex: makeSelectCurrentQuestion(),
  subcat: makeSelectSubcat(),
  reviewMode: makeSelectReviewMode(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeSubcat: subcat => dispatch(setSubcat(subcat)),
    selectOptionChoice: (optionIndex, choice) =>
      dispatch(selectQuestionChoice(optionIndex, choice)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(QuizPage);
