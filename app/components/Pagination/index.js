/**
 *
 * Pagination
 *
 */

import React from 'react';
import CenteredContentWrapper from '../CenteredContentWrapper';
import PaginationWrapper from '../PaginationWrapper';
import Button from '../Button';
import PropTypes from 'prop-types';

function Pagination({ questionIndex, questionCount }) {
  const pages = [];
  for (let i = 1; i <= questionCount; i += 1) {
    pages.push(<Button text={i} enabled={i - 1 !== questionIndex} />);
  }

  return (
    <CenteredContentWrapper>
      <Button text="Next" enabled />
      <PaginationWrapper>{pages}</PaginationWrapper>
    </CenteredContentWrapper>
  );
}

Pagination.propTypes = {
  questionIndex: PropTypes.number,
  questionCount: PropTypes.number,
};

export default Pagination;
