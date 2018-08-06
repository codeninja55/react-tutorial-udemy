import React, {PureComponent} from 'react';
import classes from './App.css';
import PersonsList from '../components/PersonList/PersonsList';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium from 'radium';

// New context API for global values
export const AuthContext = React.createContext(false);

// CLASS-BASED COMPONENTS
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js]: Inside constructor', props);
    // Only available to Component children
    this.state = {
      persons: [
        {id: 1, name: 'Andrew', age: 29},
        {id: 2, name: 'Genina', age: 26},
        {id: 3, name: 'Annie', age: 16}
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('[App.js]: Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js]: Inside componentDidMount');
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
    // const doesShow = this.state.showPersons;
    // Use functional call if you plan on using previous State properties to update
    // setState() runs asynchronously
    this.setState((prevState, props) => {
        return {showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1};
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // shallow copy
    const persons = [...this.state.persons];  // spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  // Only run through update if we need to update - more efficient.
  /*shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[UPDATE App.js]: Inside shouldComponentUpdate()',
        nextProps, nextState, nextContext);
    return nextState.persons !== this.state.persons ||
        nextState.showPersons !== this.state.showPersons;
  };*/

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <PersonsList
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          // isAuthenticated={this.state.authenticated}
      />;
    }

    // JSX Return format
    return (
      <div className={classes.App}>
        <button onClick={() => { this.setState({showPersons: true});}}>Show Persons</button>
        <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
            login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

// If using radium, must wrap App
// export default Radium(App);
export default App;
