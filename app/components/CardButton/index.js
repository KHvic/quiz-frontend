/**
 *
 * CardButton
 *
 */

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const colors = [
  { primary: 'aquamarine', secondary: '#007a7a' },
  { primary: '#ff1977', secondary: 'white' },
  { primary: '#92a8d1', secondary: '#034f84' },
  { primary: 'teal', secondary: '#dbe9e9' },
];

function GetColorStyle(idx) {
  const { primary, secondary } = colors[idx % colors.length];
  return css`
    background-color: ${primary};
    color: ${secondary};
  `;
}

const CardButton = styled(Link)`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25), 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  padding: 1rem;
  ${props => GetColorStyle(props.idx)}
  border-radius: 1px;
  width: 260px;
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
    box-shadow: 0 4px 40px 4px rgba(0, 0, 0, 0.6);
  }
  transition: background 0.4s, color 0.4s,
    transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover:before {
    transform: scaleY(1);
  }
  &:hover:after {
    transform: translate(6px, 6px);
  }
  &:active {
    transform: scale(0.99);
    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.15) inset;
    transition-duration: 0.05s;
  }

  /* stylelint-disable property-no-vendor-prefix */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`;

export default CardButton;
