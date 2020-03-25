/**
 *
 * ErrorPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectError } from '../App/selectors';
import CenteredContentWrapper from '../../components/CenteredContentWrapper';
import Button from '../../components/Button';
import reducer from '../App/reducer';

export function ErrorPage({ history, error }) {
  useInjectReducer({ key: 'app', reducer });
  console.log(error);
  const toMainMenu = () => {
    history.push('/');
  };
  return (
    <CenteredContentWrapper>
      <h2>Opps.., looks like some error occurred!</h2>
      <Button
        type="primary"
        text="Back to Main Menu"
        enabled
        click={toMainMenu}
      />
    </CenteredContentWrapper>
  );
}

ErrorPage.propTypes = {
  history: PropTypes.object,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ErrorPage);
