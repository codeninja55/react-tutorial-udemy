import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium from 'radium';

// CLASS-BASED COMPONENTS
class App extends Component {
  // Only available to Component children
  state = {
    persons: [
      {id: 1, name: 'Andrew', age: 29},
      {id: 2, name: 'Genina', age: 26},
      {id: 3, name: 'Annie', age: 16},
    ],
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //       persons: [
  //         {name: newName, age: 29},
  //       ]
  //   })
  // };

  // Two-way binding
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
        ...this.state.persons[personIndex]
    };  // Spread operator

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // shallow copy
    const persons = [...this.state.persons];  // spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  render() {
    const style = {
      backgroundColor: 'green',
      fontColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
      /*':hover': {
        backgroundColor: 'red',
        color: 'black'
      }*/
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          {/*<Person*/}
              {/*name={this.state.persons[0].name}*/}
              {/*age={this.state.persons[0].age}*/}
              {/*click={this.switchNameHandler.bind(this, 'Annie')}*/}
              {/*nameChange={this.nameChangedHandler} />*/}
        </div>
      );

      style.backgroundColor = 'red';
      // Only usable if Radium imported
      /*style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }*/
    }

    // Dynamic changing of className
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // JSX Return format
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p className={classes.join(' ')}>I'm really working!</p>
        {/* Inline Styling */}
        {/*<button style={style}*/}
                {/*onClick={() => { return this.switchNameHandler('Annie'); }}>Switch Name</button>*/}
        <button style={style}
            onClick={this.togglePersonHandler}>Show Person</button>
        {/*<Person name="Andrew" age="29">My Hobbies: coding!</Person>*/}

        {/* Using state properties */}
        {/*<Person*/}
            {/*name={this.state.persons[0].name}*/}
            {/*age={this.state.persons[0].age}*/}
            {/*click={this.switchNameHandler.bind(this, 'Annie')}*/}
            {/*nameChange={this.nameChangedHandler} />*/}

        {/* Interpolation for React JS code with Ternary Conditions */}
        {/*{this.state.showPersons ?*/}
            {/*<div>*/}
              {/*<Person*/}
                  {/*name={this.state.persons[0].name}*/}
                  {/*age={this.state.persons[0].age}*/}
                  {/*click={this.switchNameHandler.bind(this, 'Annie')}*/}
                  {/*nameChange={this.nameChangedHandler} />*/}
            {/*</div>*/}
            {/*: null*/}
        {/*}*/}
        {persons}
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

// If using radium, must wrap App
// export default Radium(App);
export default App;
