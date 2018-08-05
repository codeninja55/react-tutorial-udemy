// FUNCTIONAL COMPONENTS
// Another way of making a component, still with ES6 convention and JSX
import React, {Component} from 'react';
import classes from './Person.css';

/*const person = (props) => {
  return (
      <div className={classes.Person}>
        {/!* event properties are passed by JS automatically *!/}
        <input type="text" onChange={props.changed} value={props.name} readOnly={false} />
        <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old</p>
      </div>
  );
};

export default person;*/

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        {/* event properties are passed by JS automatically */}
        <input type="text" onChange={this.props.changed} value={this.props.name} readOnly={false} />
        <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old</p>
      </div>
    );
  }
}

export default Person;