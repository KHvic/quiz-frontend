/**
 *
 * CenteredContentWrapper
 *
 */

import styled from 'styled-components';

const CenteredContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  @media (max-width: 800px) and (orientation: landscape) {
    display: block;
    height: auto;
  }
`;

export default CenteredContentWrapper;
