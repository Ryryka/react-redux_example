import React from 'react';
import styled from 'styled-components';

export const FormTextField = props => {
  const {fieldName, placeholder, onValueChange, fieldValue} = props;

  const handleChangeValue = event => {
    const {value, name} = event.target;

    onValueChange(value, name);
  };

  const Label = styled.label`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Label htmlFor={fieldName} className="user-form__label">
      {placeholder}
      <input
        type="text"
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        onChange={e => handleChangeValue(e)}
        value={fieldValue}
      />
    </Label>
  );
};
