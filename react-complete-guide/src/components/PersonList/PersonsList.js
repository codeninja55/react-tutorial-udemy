import React, {PureComponent} from 'react';
import Person from '../Person/Person';

/*const personsList = (props) => (props.persons.map((person, index) => {
    return <Person
          clicked={props.clicked.bind(this, index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.changed(event, person.id)} />
  })
);

export default personsList;*/

class PersonsList extends PureComponent {
  render() {
    return this.props.persons.map((person, index) => {
    return <Person
      clicked={this.props.clicked.bind(this, index)}
      name={person.name}
      age={person.age}
      position={index}
      key={person.id}
      // authenticated={this.props.isAuthenticated}
      changed={(event) => this.changed(event, person.id) } />;
    });
  }
}

export default PersonsList;