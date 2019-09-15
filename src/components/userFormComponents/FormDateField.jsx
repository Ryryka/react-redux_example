import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export const FormDateField = props => {
  const {fieldName, placeholder, onValueChange, fieldValue} = props;
  const handleChangeValue = date => {
    if (date) {
      const formatedDate = moment(date).format('DD.MM.YYYY');
      onValueChange(formatedDate, fieldName);
    } else {
      onValueChange('', fieldName);
    }
  };

  const Label = styled.label`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Label htmlFor={fieldName}>
      {placeholder}
      <DatePicker
        id={fieldName}
        selected={
          fieldValue === fieldValue instanceof Date || !fieldValue
            ? fieldValue
            : moment(fieldValue, 'DD.MM.YYYY').toDate()
        }
        onChange={handleChangeValue}
        dateFormat="dd.MM.yyyy"
        placeholderText="DD.MM.YYYY"
      />
    </Label>
  );
};
