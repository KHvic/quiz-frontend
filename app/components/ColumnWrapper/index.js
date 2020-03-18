/**
 *
 * ColumnWrapper
 *
 */

import styled from 'styled-components';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* width: fit-content; */}
  height: auto;

  @media (max-width: 800px) and (orientation: landscape) {
    display: block;
    height: auto;
  }
`;

export default ColumnWrapper;
