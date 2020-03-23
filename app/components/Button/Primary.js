import styled from 'styled-components';
import buttonStyles from './buttonStyles';
import disableStyles from './disableStyles';

const Primary = styled.div`
  ${props => (props.on ? buttonStyles : disableStyles)}
  color: #991be2;
  border-color: #991be2;
  box-shadow: 6px 0 0 0 #991be2, 6px 6px 0 0 #991be2, 0 6px 0 0 #991be2;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 0 0 0 #991be2, 8px 8px 0 0 #991be2, 0 8px 0 0 #991be2;
  }
  &:active {
    transition-duration: 0.1s;
    transform: translate(4px, 4px);
    background-color: #991be2;
    color: #e6eaef;
    box-shadow: 2px 0 0 0 #991be2, 2px 2px 0 0 #991be2, 0 2px 0 0 #991be2;
  }
`;

export default Primary;
