import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Form className="border border-secondary p-3" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Retail Name</Form.Label>
        <Form.Control type="text" placeholder="Retail Name" {...register('retail_name', { required: true })}/>
        {errors.retail_name && <p>Retail name is required.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" {...register('location', { required: true })}/>
        {errors.location && <p>Location is required.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email', { required: true })}/>
        {errors.email && <p>Email is required.</p>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LeadForm

