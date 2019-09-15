import React, {useState, Fragment} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {FormTextField, FormDateField} from './userFormComponents';
import {actions} from '../_actions/actions';

const NewUserForm = props => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    location: '',
    dateOfBirth: '',
  });

  const handleChangeFieldValue = (value, name) => {
    setFormFields(_ => {
      const copyformFields = {...formFields};
      copyformFields[name] = value;
      return {...copyformFields};
    });
  };

  const createNewUser = event => {
    event.preventDefault();
    const {dispatch} = props;
    const {firstName, lastName, location, dateOfBirth} = formFields;
    const req = {
      first_name: firstName,
      last_name: lastName,
      dob: dateOfBirth,
      location,
    };
    dispatch(actions.createUser(req));
  };

  const validateFields = () => {
    const {firstName, lastName, location, dateOfBirth} = formFields;
    return firstName && lastName && location && dateOfBirth;
  };

  const Form = styled.form`
    max-width: 350px;
  `;

  const getUserForm = () => {
    const {firstName, lastName, location, dateOfBirth} = formFields;
    return (
      <div>
        <h3>Create User Form</h3>
        <Form>
          <FormTextField
            fieldName="firstName"
            fieldValue={firstName}
            onValueChange={handleChangeFieldValue}
            placeholder="First name"
          />
          <FormTextField
            fieldName="lastName"
            fieldValue={lastName}
            onValueChange={handleChangeFieldValue}
            placeholder="Last name"
          />

          <FormDateField
            fieldName="dateOfBirth"
            fieldValue={dateOfBirth}
            onValueChange={handleChangeFieldValue}
            placeholder="Date of Birth"
          />
          <FormTextField
            fieldName="location"
            fieldValue={location}
            onValueChange={handleChangeFieldValue}
            placeholder="Location"
          />
          <button
            type="submit"
            onClick={e => createNewUser(e)}
            disabled={!validateFields()}
          >
            Create
          </button>
        </Form>
      </div>
    );
  };

  return <Fragment>{getUserForm()}</Fragment>;
};

const connectedNewUserForm = connect()(NewUserForm);
export {connectedNewUserForm as NewUserForm};
