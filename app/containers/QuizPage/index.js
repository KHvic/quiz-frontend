/**
 *
 * QuizPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import querySearch from "query-string";

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectQuizPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function QuizPage(props) {
  useInjectReducer({ key: 'quizPage', reducer });
  useInjectSaga({ key: 'quizPage', saga });

  const subcat = props.match.params.subcat;
  return (
    <div>
      <Helmet>
        <title>QuizPage</title>
        <meta name="description" content="Description of QuizPage" />
      </Helmet>
      <h1>{subcat} Quiz Page</h1>
    </div>
  );
}

QuizPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quizPage: makeSelectQuizPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QuizPage);
