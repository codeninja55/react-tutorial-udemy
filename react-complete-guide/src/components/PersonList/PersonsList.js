import React from 'react';
import Person from '../Person/Person';

const personsList = (props) => (props.persons.map((person, index) => {
    return <Person
          clicked={props.clicked.bind(this, index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.changed(event, person.id)} />
  })
);

export default personsList;