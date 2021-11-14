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
    const url='https://cunning-goat-blyser-dev-ed.my.salesforce.com/services/apexrest/Form/newCase';
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
          <Form.Label>Account Id</Form.Label>
          <Form.Control type="text" placeholder="Account Id" {...register('accountId', { required: true })}/>
          {errors.accountId && <p>Account Id is required.</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select your case:</Form.Label>
          <Form.Select aria-label="Default select example" {...register('picklist', { required: true })}>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Place any text</Form.Label>
          <Form.Control as="textarea" rows={3}  {...register('text', { required: true })}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {formStatus.success && <Alert variant='success'>
        Your form was successfully submited!
      </Alert>
      }
      {formStatus.fail && <Alert variant='danger'>
        Failed! Incorect Data.
      </Alert>
      }
    </>
  )
}

export default LeadForm

