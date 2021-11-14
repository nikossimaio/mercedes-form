import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const LeadForm = () => {
  const [formStatus, setFormStatus] = useState({ success: null, fail: false })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const url='https://cunning-goat-blyser-dev-ed.my.salesforce.com/services/apexrest/Form/newLead';
    const response = await axios.post(url, data)
    console.log(response);
    if (response === "200" ) {
      setFormStatus({ success: true, fail: false });
    }
  };

  return (
    <>
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
    {formStatus.success && <Alert variant='success'>
      Your form was successfully submited!
    </Alert>
    }
    </>
  )
}

export default LeadForm

