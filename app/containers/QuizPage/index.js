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
import { setSubcat } from './actions';
import {
  makeSelectQuestions,
  makeSelectSubcat,
  makeSelectCurrentQuestion,
  makeSelectAnswers,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import QuizContainer from '../../components/QuizContainer';

export function QuizPage({ changeSubcat, match, questions, questionIndex }) {
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
        <QuizContainer {...questions[questionIndex]} />
      )}
    </div>
  );
}

QuizPage.propTypes = {
  changeSubcat: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  questions: PropTypes.array,
  questionIndex: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
  answers: makeSelectAnswers(),
  questionIndex: makeSelectCurrentQuestion(),
  subcat: makeSelectSubcat(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeSubcat: subcat => dispatch(setSubcat(subcat)),
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
