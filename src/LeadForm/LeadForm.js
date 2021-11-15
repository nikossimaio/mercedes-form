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
    console.log(data);
    const params = {
      method: 'POST',
      headers: {
        'content-type': "application/json; charset=UTF-8",
        'Authorization': "Bearer 00D7Q00000169Es!AREAQEVNJf9CycCnXCiuQlvJ_5Wf2B37gI_UtJTitAs45QtloixgMLQfupbmc9xfw8qYqPrL6vVQzrJlpw6eBQyj2W.KRqKf",
        'Access-Control-Allow-Credentials': 'true'
      },
      data: data
    }
    const response = await axios.post(url, params)
    console.log(response);
    if (response === "200" ) {
      setFormStatus({ success: true, fail: false });
    }
  };

  return (
    <>
    <Form className="border border-secondary p-3" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salutation:</Form.Label>
          <Form.Select aria-label="Default select example" {...register('salutation', { required: true })}>
            <option>--None--</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </Form.Select>
          {errors.salutation && <p>Salutation is required.</p>}
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" {...register('firstName')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" {...register('lastName')}/>
        {errors.lastName && <p>Last name is required.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Company" {...register('company', { required: true })}/>
        {errors.company && <p>Company is required.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email', { required: true })}/>
        {errors.email && <p>Email is required.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" {...register('phone')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Mobile" {...register('mobile')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Website</Form.Label>
        <Form.Control type="text" placeholder="Website" {...register('website')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Annual Revenue</Form.Label>
        <Form.Control type="text" placeholder="Annual Revenue" {...register('annualRevenue')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>No. of Employees</Form.Label>
        <Form.Control type="number" placeholder="No. of Employees" {...register('numberOfEmployees')}/>
      </Form.Group>
      <h1>helelo</h1>
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

