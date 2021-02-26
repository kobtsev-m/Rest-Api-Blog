import React from 'react';
import { Form } from 'react-bootstrap';
import { capitalize } from 'lodash';

function FormControl({ handleChange, errors, isSubmitted, ...props }) {
  return (
    <Form.Group controlId={`${props.name}Input`}>
      <Form.Label>{capitalize(props.name)}</Form.Label>
      <Form.Control
        onChange={handleChange}
        isValid={isSubmitted && !errors[props.name]}
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
