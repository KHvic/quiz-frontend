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
import queryString from 'query-string';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  setSubcat,
  selectQuestionChoice,
  switchQuestion,
  submitSelections,
  quit,
} from './actions';
import {
  makeSelectQuestions,
  makeSelectSubcat,
  makeSelectCurrentQuestion,
  makeSelectSelections,
  makeSelectReviewMode,
  makeSelectCorrectQuestions,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import QuizContainer from '../../components/QuizContainer';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import ScoreText from '../../components/ScoreText';
import messages from './messages';

export function QuizPage({
  changeSubcat,
  selectOptionChoice,
  correctQuestions,
  match,
  location,
  questions,
  selections,
  questionIndex,
  reviewMode,
  selectQuestion,
  submitQuiz,
  exit,
}) {
  useInjectReducer({ key: 'quizPage', reducer });
  useInjectSaga({ key: 'quizPage', saga });

  useEffect(() => {
    const params = queryString.parse(location.search);
    changeSubcat(match.params.subcat, params.count);
  }, []);
  if (!questions.length) {
    return <LoadingIndicator />;
  }
  const leftTitle = messages.catMap[match.params.subcat];
  const rightTitle = reviewMode
    ? `Reviewing Quiz  `
    : `Q${questionIndex + 1}/${questions.length}  `;
  return (
    <div>
      <Helmet>
        <title>QuizPage</title>
        <meta name="description" content="Description of QuizPage" />
      </Helmet>
      <Header
        title={leftTitle}
        title2={rightTitle}
        exitIcon
        iconClass="fa fa-edit"
      />

      <div>
        <QuizContainer
          {...questions[questionIndex]}
          onSelectChoice={selectOptionChoice}
          reviewMode={reviewMode}
          selection={selections[questionIndex]}
        />
        {reviewMode && (
          <ScoreText score={correctQuestions.size} total={questions.length} />
        )}
        <Pagination
          questionIndex={questionIndex}
          questionCount={questions.length}
          submit={reviewMode ? exit : submitQuiz}
          selectPage={selectQuestion}
          reviewMode={reviewMode}
          correctQuestions={correctQuestions}
          selections={selections}
        />
      </div>
    </div>
  );
}

QuizPage.propTypes = {
  changeSubcat: PropTypes.func.isRequired,
  selectOptionChoice: PropTypes.func.isRequired,
  correctQuestions: PropTypes.instanceOf(Set),
  match: PropTypes.object.isRequired,
  location: PropTypes.object,
  questions: PropTypes.array,
  selections: PropTypes.array,
  questionIndex: PropTypes.number,
  reviewMode: PropTypes.bool,
  submitQuiz: PropTypes.func,
  selectQuestion: PropTypes.func,
  exit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
  selections: makeSelectSelections(),
  questionIndex: makeSelectCurrentQuestion(),
  subcat: makeSelectSubcat(),
  reviewMode: makeSelectReviewMode(),
  correctQuestions: makeSelectCorrectQuestions(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeSubcat: (subcat, count) => dispatch(setSubcat(subcat, count)),
    selectOptionChoice: (optionIndex, choice) =>
      dispatch(selectQuestionChoice(optionIndex, choice)),
    selectQuestion: nextQuestionIndex =>
      dispatch(switchQuestion(nextQuestionIndex)),
    submitQuiz: () => dispatch(submitSelections()),
    exit: () => dispatch(quit()),
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
