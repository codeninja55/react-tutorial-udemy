// FUNCTIONAL COMPONENTS
// Another way of making a component, still with ES6 convention and JSX
import React from 'react';

const person = (props) => {
  return (
      <div>
        <p>I'm {props.name} and I am {props['age']} years old</p>
        <p>{props.children}</p>
      </div>
  );
};

export default person;