import React, { Component } from 'react';
import { Section } from './Section/Section';
import { ContactsInput } from './ContactsInput/ContactsInput';
import { ContactsStorage } from './ContactsStorage/ContactsStorage';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.some(contact => contact.name === newContact.name))
      return alert(`${newContact.name} is already in contacts.`);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteConnact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { addContact, changeFilter, getVisibleContacts, deleteConnact } =
      this;
    const { contacts, filter } = this.state;

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
          <ContactsInput onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <Filter value={filter} onChange={changeFilter} />
              <ContactsStorage
                contactList={getVisibleContacts()}
                onDeleteCOntact={deleteConnact}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}
