/**
 *
 * ScoreText
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scoreFontStyle from './scoreFontStyle';
import fontStyle from './fontStyle';
import RowWrapper from '../RowWrapper';

function ScoreText({ score, total }) {
  const correctRatio = score / total;
  const Text = styled.span`
    ${fontStyle}
  `;
  const Score = styled.span`
    ${scoreFontStyle}
  `;
  return (
    <RowWrapper>
      <Text>You scored </Text>
      <Score score={correctRatio}>{score}</Score>
      <Text> correct out of {total} questions!</Text>
    </RowWrapper>
  );
}

ScoreText.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
};

export default ScoreText;
