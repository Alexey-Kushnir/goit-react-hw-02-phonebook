import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

// model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactsInput />
        </Section>
        <Section title="Contacts">
          <ContactsStorage />
        </Section>
      </div>
    );
  }
}
