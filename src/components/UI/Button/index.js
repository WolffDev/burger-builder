import React, { Fragment } from 'react';

import classes from './Button.css';

const button = props => (
  <Fragment>
    <button
      disabled={props.disabled}
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  </Fragment>
);

export default button;
