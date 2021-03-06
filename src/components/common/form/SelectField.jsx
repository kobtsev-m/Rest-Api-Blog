import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { capitalize } from 'lodash';

function SelectField(props) {
  const isInvalid = !!props.errors[props.name];
  const isValid = props.submitted && !props.errors[props.name];

  const fieldClass = isInvalid ? 'is-invalid' : isValid ? 'is-valid' : '';
  const fieldStyles = {
    control: (provided) =>
      isInvalid
        ? { ...provided, borderColor: '#dc3545' }
        : isValid
        ? { ...provided, borderColor: '#28a745' }
        : { ...provided }
  };

  const handleChange = (value, action) => {
    props.handleChange({ [action.name]: value });
  };

  return (
    <Form.Group controlId={`${props.name}Select`}>
      <Form.Label>
        {capitalize(props.name)}
        {props.required ? '*' : ''}
      </Form.Label>
      <Select
        isMulti={props.isMulti}
        name={props.name}
        onChange={handleChange}
        options={props.options[props.name]}
        styles={fieldStyles}
        className={fieldClass}
        value={props.value}
      />
      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        {props.errors[props.name]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default SelectField;
