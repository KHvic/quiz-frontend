/**
 *
 * MainMenu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainMenu from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Header from '../../components/Header';
import ColumnWrapper from '../../components/ColumnWrapper';
import CardButton from '../../components/CardButton';
import OptionsWrapper from '../../components/OptionsWrapper';

export function MainMenu() {
  useInjectReducer({ key: 'mainMenu', reducer });
  useInjectSaga({ key: 'mainMenu', saga });

  return (
    <ColumnWrapper>
      <Helmet>
        <title>Free GRE mock test | practice online with score</title>
        <meta
          name="description"
          content="Practice with over 500 free actual GRE questions to improve your score.
Receive your score and keep improving with the provided answers."
        />
      </Helmet>
      <Header {...messages.greVerbalHeader} iconClass="fa fa-university" />
      <OptionsWrapper>
        <CardButton to="/quiz/TC?count=10" idx={0}>
          <h1>Text Completion</h1>
        </CardButton>
        <CardButton to="/quiz/SE?count=10" idx={1}>
          <h1>Sentence Equivalence</h1>
        </CardButton>
      </OptionsWrapper>
      <Header {...messages.greVerbalPracticeHeader} iconClass="fa fa-book" />
      <OptionsWrapper>
        <CardButton to="/quiz/TC?count=1" idx={0}>
          <h1>Text Completion</h1>
        </CardButton>
        <CardButton to="/quiz/SE?count=1" idx={1}>
          <h1>Sentence Equivalence</h1>
        </CardButton>
      </OptionsWrapper>
    </ColumnWrapper>
  );
}

MainMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainMenu: makeSelectMainMenu(),
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

export default compose(
  withConnect,
  memo,
)(MainMenu);
