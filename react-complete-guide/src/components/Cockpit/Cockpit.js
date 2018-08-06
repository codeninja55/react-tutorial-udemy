import React, {Fragment} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.red].join(' ');
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
    //  Higher Order Component as a wrapper to avoid <div> component unnecessarily
    /*<Aux>*/
    // React >=16.2 has default Aux
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>I'm really working!</p>
      {/* Inline Styling */}
      <button className={btnClass}
              onClick={props.clicked}>Show Person</button>
    </Fragment>
    /*</Aux>*/
  );
};

export default cockpit;