import styled from 'styled-components';
import choiceStyles from './choiceStyles';

const Unselected = styled.div`
  ${choiceStyles}
  &:hover {
    cursor: pointer;
    background: #2db9ff;
    color: white;
  }
`;

export default Unselected;
