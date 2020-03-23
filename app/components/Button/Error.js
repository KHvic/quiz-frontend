import styled from 'styled-components';
import buttonStyles from './buttonStyles';

const Error = styled.div`
  ${buttonStyles}
  color: #e60036;
  border-color: #e60036;
  box-shadow: 6px 0 0 0 #e60036, 6px 6px 0 0 #e60036, 0 6px 0 0 #e60036;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 0 0 0 #e60036, 8px 8px 0 0 #e60036, 0 8px 0 0 #e60036;
  }
  &:active {
    transition-duration: 0.1s;
    transform: translate(4px, 4px);
    background-color: #e60036;
    color: #e6eaef;
    box-shadow: 2px 0 0 0 #e60036, 2px 2px 0 0 #e60036, 0 2px 0 0 #e60036;
  }
`;

export default Error;
