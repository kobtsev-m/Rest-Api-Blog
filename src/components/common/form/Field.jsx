import React from 'react';
import { Form } from 'react-bootstrap';
import { capitalize } from 'lodash';

function FormControl({ handleChange, errors, submitted, ...props }) {
  const handleChangeControl = (event) => {
    handleChange({ [event.target.name]: event.target.value });
  };
  return (
    <Form.Group controlId={`${props.name}Input`}>
      <Form.Label>
        {capitalize(props.name)}
        {props.required ? '*' : ''}
      </Form.Label>
      <Form.Control
        onChange={handleChangeControl}
        isValid={submitted && !errors[props.name]}
        isInvalid={!!errors[props.name]}
        {...props}
      ></Form.Control>
      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        {errors[props.name]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

function Field(props) {
  return <FormControl {...props} />;
}

export default Field;
