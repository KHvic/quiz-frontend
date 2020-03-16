/**
 *
 * McqSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Choice from '../Choice';
import divStyle from './divStyle';
import {
  SelectedType,
  UnselectedType,
  DisabledType,
  CorrectType,
  IncorrectType,
} from '../Choice/constants';

function McqSelect({ choices, answer, selected, clickChoice, reviewMode }) {
  const Div = styled.div`
    ${divStyle}
  `;
  const Wrap = styled.div``;
  return (
    <Div>
      {choices.map((choice, idx) => {
        const allSelected = selected.size >= answer.length;
        const type = GetChoiceType(
          reviewMode,
          answer instanceof Array && answer.includes(idx),
          selected.has(idx),
          allSelected,
        );

        return (
          <Wrap
            key={choice}
            onClick={() => selectionEnabled(type) && clickChoice(idx)}
          >
            <Choice choice={choice} type={type} onClick />
          </Wrap>
        );
      })}
    </Div>
  );
}

function GetChoiceType(reviewMode, isAnswer, selected, allSelected) {
  if (reviewMode) {
    if (isAnswer) return CorrectType;
    if (selected) return IncorrectType;
    return DisabledType;
  }
  if (selected) return SelectedType;
  return allSelected ? DisabledType : UnselectedType;
}

function selectionEnabled(type) {
  return type === SelectedType || type === UnselectedType;
}

McqSelect.propTypes = {
  choices: PropTypes.array,
  answer: PropTypes.array,
  clickChoice: PropTypes.func,
  selected: PropTypes.instanceOf(Set),
  reviewMode: PropTypes.bool,
};

export default McqSelect;
