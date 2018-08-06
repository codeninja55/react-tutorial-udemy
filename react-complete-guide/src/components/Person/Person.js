// FUNCTIONAL COMPONENTS
// Another way of making a component, still with ES6 convention and JSX
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

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

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();  // New React 16.3 ref method
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[UPDATE Person.js]: Inside shouldComponentUpdate()',
        nextProps, nextState, nextContext);
    return nextProps.persons !== this.props.persons;
  }

  componentDidMount() {
    console.log('[CREATE Person.js]: Inside componentDidMount()');
    if (this.props.position === 0) {
      // this.inputElement.focus();
      this.inputElement.current.focus();  // new React 16.3 ref element access
    }
  }

  render() {
    return (
      <Aux>
        {/* event properties are passed by JS automatically */}
        <input
            // ref={(input) => { this.inputElement = input; } }
            ref={this.inputElement}  // New React 16.3 wrapper method
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            readOnly={false} />
        <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old</p>
      </Aux>
    );
  }
}

// Type checking for prop properties with KV pairs
Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);