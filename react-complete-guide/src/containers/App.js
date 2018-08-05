import React, {Component} from 'react';
import classes from './App.css';
import PersonsList from '../components/PersonList/PersonsList';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium from 'radium';

// CLASS-BASED COMPONENTS
class App extends Component {
  constructor(props) {
    super(props);
    // Only available to Component children
    this.state = {
      persons: [
        {id: 1, name: 'Andrew', age: 29},
        {id: 2, name: 'Genina', age: 26},
        {id: 3, name: 'Annie', age: 16},
      ],
      showPersons: false,
    };
  }

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <PersonsList
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    // JSX Return format
    return (
      <div className={classes.App}>
        <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

// If using radium, must wrap App
// export default Radium(App);
export default App;
