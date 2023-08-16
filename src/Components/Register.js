import React, { useState } from 'react';
export default function Register() {

    const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const [showCustomerName, setShowCustomerName] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setShowCustomerName(true);
    };



return (
<div className="container mt-5">
      <h1>New Card Registration</h1>
      <form  onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="id" className="form-label">ID :</label>
          <input type="text" className="form-control" id="id" data-toggle="tooltip" data-placement="top" title="Enter Unique ID" placeholder='Enter Unique ID'/>
      </div>
      <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" data-toggle="tooltip" data-placement="top" placeholder="Enter your first name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" data-toggle="tooltip" data-placement="top" placeholder="Enter your last name" />
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">Job</label>
          <input type="text" className="form-control" id="job" data-toggle="tooltip" data-placement="top" placeholder="Enter Job" />
        </div>
        <div className="mb-3">
          <label htmlFor="dobInput" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dobInput" data-toggle="tooltip" data-placement="top" placeholder="Enter your date of birth" />
        </div>
        <div className="mb-3">
          <label htmlFor="genderSelect" className="form-label">Gender</label>
          <select className="form-select" id="genderSelect" data-toggle="tooltip" data-placement="top" placeholder="Select your gender">
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
          Customer ID: {firstName}
        </p>
      )}
    </div>
)

}