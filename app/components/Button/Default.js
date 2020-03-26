import styled from 'styled-components';
import buttonStyles from './buttonStyles';
import disableStyles from './disableStyles';

const Default = styled.div`
  ${props => (props.on ? buttonStyles : disableStyles)}
  color: #666877;
  border-color: #666877;
  box-shadow: 6px 0 0 0 #666877, 6px 6px 0 0 #666877, 0 6px 0 0 #666877;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 0 0 0 #666877, 8px 8px 0 0 #666877, 0 8px 0 0 #666877;
  }
  &:active {
    transition-duration: 0.1s;
    transform: translate(4px, 4px);
    background-color: #666877;
    color: #e6eaef;
    box-shadow: 2px 0 0 0 #666877, 2px 2px 0 0 #666877, 0 2px 0 0 #666877;
  }
`;

export default Default;
