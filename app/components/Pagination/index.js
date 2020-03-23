/**
 *
 * Pagination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DoneText, NextText, ExitText } from './constants';
import CenteredContentWrapper from '../CenteredContentWrapper';
import RowWrapper from '../RowWrapper';
import Button from '../Button';

function Pagination({
  questionIndex,
  questionCount,
  selectPage,
  submit,
  reviewMode,
  correctQuestions,
}) {
  const pages = [];
  for (let i = 1; i <= questionCount; i += 1) {
    let type = 'primary';
    if (reviewMode) type = correctQuestions.has(i - 1) ? 'success' : 'error';
    pages.push(
      <Button
        text={i.toString()}
        enabled={i - 1 !== questionIndex}
        click={() => selectPage(i - 1)}
        key={i}
        type={type}
      />,
    );
  }

  return (
    <CenteredContentWrapper>
      {getButton(
        submit,
        () => selectPage(questionIndex + 1),
        questionIndex === questionCount - 1,
        reviewMode,
      )}
      <RowWrapper>{pages.length > 1 && pages}</RowWrapper>
    </CenteredContentWrapper>
  );
}

function getButton(submit, nextPage, isLast, reviewMode) {
  if (reviewMode) {
    return <Button text={ExitText} enabled click={submit} />;
  }
  return isLast ? (
    <Button text={DoneText} enabled click={submit} />
  ) : (
    <Button text={NextText} enabled click={nextPage} />
  );
}

Pagination.propTypes = {
  questionIndex: PropTypes.number,
  questionCount: PropTypes.number,
  submit: PropTypes.func,
  selectPage: PropTypes.func,
  reviewMode: PropTypes.bool,
  correctQuestions: PropTypes.instanceOf(Set),
};

export default Pagination;
