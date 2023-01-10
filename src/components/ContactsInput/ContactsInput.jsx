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

  state = {
    id: nanoid(8),
    name: '',
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
    this.setState({ id: nanoid(8), name: '' });
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
        <SubmitButton type="submit">Ad contact</SubmitButton>
      </Container>
    );
  }
}

ContactsInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
