import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  width: fit-content;
  min-width: 46px;
  max-width: 700px;
  font-size: 1em;
  line-height: 1.42;
  padding: 0.6em 0.8em;
  margin: 0.4em;
  text-align: center;
  font-weight: normal;
  border-width: 3px;
  border-style: solid;
  background: transparent;
  border-radius: 0.4em;
  cursor: pointer;
  font-family: 'Booster Next FY', 'Avenir Next', Avenir, sans-serif;
  user-select: none;
  vertical-align: bottom;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.3s, background-color 0.3s;

  color: #252730;
  border-color: #252730;
  box-shadow: 6px 0 0 0 #252730, 6px 6px 0 0 #252730, 0 6px 0 0 #252730;
  &:hover {
    box-shadow: 8px 0 0 0 #252730, 8px 8px 0 0 #252730, 0 8px 0 0 #252730;
  }
  &:active {
    background-color: #252730;
    color: #e6eaef;
    box-shadow: 2px 0 0 0 #252730, 2px 2px 0 0 #252730, 0 2px 0 0 #252730;
  }
`;

export default buttonStyles;
