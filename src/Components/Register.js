import React, { useState,useTransition  } from 'react';
import { useNavigate } from 'react-router-dom'
import { addCustomer } from '../Services/custservice';

export default function Register() {

   

    

    const [customer, setCustomer] = useState({id:'',firstName:'', lastName:'', gender:'',dob:'',Job:''})
    const [showCustomerName, setShowCustomerName] = useState(false);

    let navigate = useNavigate()
    const handleChange = (event)=>{
      let {name, value} = event.target;
      if(name === 'id')
      {
          if(value){
              value = isNaN(parseFloat(value)) ? 0 : parseFloat(value)
          }
      }
      let newcustomer = {...customer, [name]:value}
      setCustomer(newcustomer)
  }
  const handleSubmit = (event)=>{
      event.preventDefault();
      addCustomer(customer).then(res=>navigate('/'))
  }
  


return (
<div className="container mt-5">
      <h1>New Card Registration</h1>
      <form  onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="id" className="form-label" >ID :</label>
          <input type="text" className="form-control" name='id' value={customer.id} onChange={handleChange} placeh4older='Enter Unique ID' />
      </div>
      <div className="mb-3">
          <label htmlFor="firstName" className="form-label" >First Name</label>
          <input type="text" className="form-control" name='firstName' value={customer.firstName} onChange={handleChange}data-toggle="tooltip" data-placement="top" placeholder="Enter your first name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" name='lastName'value={customer.lastName} onChange={handleChange} data-toggle="tooltip" data-placement="top" placeholder="Enter your last name" />
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">Job</label>
          <input type="text" className="form-control" name='job' value={customer.Job} onChange={handleChange} data-toggle="tooltip" data-placement="top" placeholder="Enter Job" />
        </div>
        <div className="mb-3">
          <label htmlFor="dobInput" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name='dob' value={customer.dob} onChange={handleChange} data-toggle="tooltip" data-placement="top" placeholder="Enter your date of birth" />
        </div>
        <div className="mb-3">
          <label htmlFor="genderSelect" className="form-label">Gender</label>
          <select className="form-select"  name='gender' value={customer.gender} onChange={handleChange}data-toggle="tooltip" data-placement="top" placeholder="Select your gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        
        
        <button type="submit" className="btn btn-primary">Register New Card</button>
      </form>
      {showCustomerName && (
        <p className="mt-3 text-success">
          Customer ID: {customer.id}
        </p>
      )}
    </div>

)

}