/**
 *
 * Pagination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DoneText, NextText } from './constants';
import CenteredContentWrapper from '../CenteredContentWrapper';
import PaginationWrapper from '../PaginationWrapper';
import Button from '../Button';

function Pagination({ questionIndex, questionCount, selectPage, submit }) {
  const pages = [];
  for (let i = 1; i <= questionCount; i += 1) {
    pages.push(
      <Button
        text={i.toString()}
        enabled={i - 1 !== questionIndex}
        click={() => selectPage(i - 1)}
        key={i}
      />,
    );
  }
  const nextButton =
    questionIndex === questionCount - 1 ? (
      <Button text={DoneText} enabled click={submit} />
    ) : (
      <Button
        text={NextText}
        enabled
        click={() => selectPage(questionIndex + 1)}
      />
    );

  return (
    <CenteredContentWrapper>
      {nextButton}
      <PaginationWrapper>{pages}</PaginationWrapper>
    </CenteredContentWrapper>
  );
}

Pagination.propTypes = {
  questionIndex: PropTypes.number,
  questionCount: PropTypes.number,
  submit: PropTypes.func,
  selectPage: PropTypes.func,
};

export default Pagination;
