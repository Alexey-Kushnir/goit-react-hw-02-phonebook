import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import {
  Container,
  InputName,
  InputValue,
  SubmitButton,
} from './ContactsInput.styled';

export class ContactsInput extends Component {
  nameInputId = nanoid(8);
  numberInputId = nanoid(8);

  state = {
    id: nanoid(8),
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: nanoid(8), name: '', number: '' });
  };

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <InputName htmlFor={this.nameInputId}>Name</InputName>
        <InputValue
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
          id={this.nameInputId}
        />
        <InputName htmlFor={this.numberInputId}>Number</InputName>
        <InputValue
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
          id={this.numberInputId}
        />
        <SubmitButton type="submit">Ad contact</SubmitButton>
      </Container>
    );
  }
}

ContactsInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
