import styled from 'styled-components';
import buttonStyles from './buttonStyles';
import disableStyles from './disableStyles';

const Success = styled.div`
  ${props => (props.on ? buttonStyles : disableStyles)}
  color: #42db9d;
  border-color: #42db9d;
  box-shadow: 6px 0 0 0 #42db9d, 6px 6px 0 0 #42db9d, 0 6px 0 0 #42db9d;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 0 0 0 #42db9d, 8px 8px 0 0 #42db9d, 0 8px 0 0 #42db9d;
  }
  &:active {
    transition-duration: 0.1s;
    transform: translate(4px, 4px);
    background-color: #42db9d;
    color: #e6eaef;
    box-shadow: 2px 0 0 0 #42db9d, 2px 2px 0 0 #42db9d, 0 2px 0 0 #42db9d;
  }
`;

export default Success;
