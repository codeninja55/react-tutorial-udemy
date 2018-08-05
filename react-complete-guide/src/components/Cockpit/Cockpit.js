import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.red;
  }

  // Dynamic changing of className
  const assignedClasses = [];
  if ( props.persons.length <= 2 ) {
    assignedClasses.push( classes.red );
  }
  if ( props.persons.length <= 1 ) {
    assignedClasses.push( classes.bold );
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>I'm really working!</p>
      {/* Inline Styling */}
      <button className={btnClass}
              onClick={props.clicked}>Show Person</button>
    </div>
  );
};

export default cockpit;