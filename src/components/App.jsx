import React, { Component } from 'react';
import { Section } from './Section/Section';
import { ContactsInput } from './ContactsInput/ContactsInput';
import { ContactsStorage } from './ContactsStorage/ContactsStorage';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactsInput onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactsStorage contactList={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
