/**
 *
 * ExitIcon
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './iconStyles';

function ExitIcon() {
  return (
    <Link to="/">
      <Icon className="fa fa-times-circle" aria-hidden="true" />
    </Link>
  );
}

ExitIcon.propTypes = {};

export default ExitIcon;
