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
`;

export default buttonStyles;
