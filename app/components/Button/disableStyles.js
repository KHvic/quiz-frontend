import { css } from 'styled-components';
import buttonStyles from './buttonStyles';

const disableStyles = css`
  ${buttonStyles}
  cursor: not-allowed;
  opacity: 0.8;

  &:hover:after {
    opacity: 1;
  }
  &:active {
    opacity: 0.6;
  }
`;

export default disableStyles;
