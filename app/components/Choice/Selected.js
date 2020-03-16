import styled from 'styled-components';
import choiceStyles from './choiceStyles';

const Selected = styled.div`
  ${choiceStyles}
  color: white;
  background: #2db9ff;
  &:hover {
    cursor: pointer;
    background: white;
    color: black;
  }
`;

export default Selected;
