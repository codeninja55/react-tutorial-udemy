import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// CLASS-BASED COMPONENTS
export default class App extends Component {
  // Only available to Component children
  state = {
    persons: [
      {name: 'Andrew', age: 29},
    ]
  };

  switchNameHandler = (newName) => {
    this.setState(
        {
          persons: [
            {name: newName, age: 26},
          ]
        }
    )
  };

  // Two-way binding
  nameChangedHandler = (event) => {
    this.setState(
        {
          persons: [
            {name: event.target.value, age: 26},
          ]
        }
    )
  };

  render() {
    const style = {
      backgroundColor: 'red',
      fontColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    // JSX Return format
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        {/* Inline Styling */}
        <button style={style}
            onClick={() => { return this.switchNameHandler('Annie'); }}>Switch Name</button>
        {/*<Person name="Andrew" age="29">My Hobbies: coding!</Person>*/}

        {/* Using state properties */}
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Annie')}
            nameChange={this.nameChangedHandler} />
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
