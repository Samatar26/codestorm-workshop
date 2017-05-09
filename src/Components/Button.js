import React from 'react';

export const Button = (props) => {
  return (
  <section className="buttons">
  <button onClick={props.handleCount.bind(this, 1)}>+</button>
  <button onClick={props.handleCount.bind(this, 0)}>Reset</button>
  <button onClick={props.handleCount.bind(this, -1)}>-</button>
  </section>
);
    };
