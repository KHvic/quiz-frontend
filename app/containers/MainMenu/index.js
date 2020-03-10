/**
 *
 * MainMenu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainMenu from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import CenteredContentWrapper from '../../components/CenteredContentWrapper';
import CardButton from '../../components/CardButton';
import OptionsWrapper from '../../components/OptionsWrapper';

export function MainMenu() {
  useInjectReducer({ key: 'mainMenu', reducer });
  useInjectSaga({ key: 'mainMenu', saga });

  return (
    <CenteredContentWrapper>
      <Helmet>
        <title>MainMenu</title>
        <meta name="description" content="Description of MainMenu" />
      </Helmet>
      
      <OptionsWrapper>
        <CardButton> 
          <h1>Text Completion</h1>
        </CardButton>
        <CardButton> 
          <h1>Sentence Equivalence</h1>
        </CardButton>
      </OptionsWrapper>
      {/* <FormattedMessage {...messages.header} /> */}
    </CenteredContentWrapper>
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
