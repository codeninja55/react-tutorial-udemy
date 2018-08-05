import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// CLASS-BASED COMPONENTS
export default class App extends Component {
  render() {
    // JSX Return format
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <Person />
      </div>
    );

    // React build original format
    // return React.createElement('h1', null, 'Does this work now?');

    // React build original format with nesting
    /*return React.createElement('div', {className: 'App'},
        React.createElement('h1', null, 'Does this work yet?')
    );*/
  }
}
