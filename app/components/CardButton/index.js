/**
 *
 * CardButton
 *
 */

import styled from 'styled-components';

const CardButton = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25), 0 2px 6px 0 rgba(0,0,0,0.25);
  padding: 1rem;
  background-color: aquamarine;
  border-radius: 1px;
  width: 240px;
  max-width: 400px;
  max-height: 120px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px;

  cursor: pointer;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;

export default CardButton;
