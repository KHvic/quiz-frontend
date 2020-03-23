import { css } from 'styled-components';
import fontStyle from './fontStyle';

const scoreFontStyle = css`
  ${fontStyle};
  color: ${props => {
    if (props.score === 1) return '#42db9d';
    return props.score >= 0.7 ? '#2db9ff' : '#e60036';
  }};
`;

export default scoreFontStyle;
