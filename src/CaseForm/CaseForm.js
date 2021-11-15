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
        <Form.Group className="mb-3" controlId="accountId">
          <Form.Label>Account Id</Form.Label>
          <Form.Control type="text" placeholder="Account Id" {...register('accountId', { required: true })}/>
          {errors.accountId && <p>Account Id is required.</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="caseReason">
          <Form.Label>Case Reason:</Form.Label>
          <Form.Select aria-label="Default select example" {...register('caseReason')}>
            <option>--None--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Type:</Form.Label>
          <Form.Select aria-label="Default select example" {...register('type')}>
            <option>--None--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="priority">
          <Form.Label>Priority:</Form.Label>
          <Form.Select aria-label="Default select example" {...register('priority')}>
            <option>--None--</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="priority">
          <Form.Label>Product:</Form.Label>
          <Form.Select aria-label="Default select example" {...register('priority')}>
            <option>--None--</option>
            <option value="GC1020">GC1020</option>
            <option value="GC1040">GC1040</option>
            <option value="GC1060">GC1060</option>
            <option value="GC3020">GC3020</option>
            <option value="GC3040">GC3040</option>
            <option value="GC3060">GC3060</option>
            <option value="GC5020">GC5020</option>
            <option value="GC5040">GC5040</option>
            <option value="GC5060">GC5060</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="textarea" rows={3}  {...register('subject', { required: true })}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3}  {...register('description', { required: true })}/>
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

