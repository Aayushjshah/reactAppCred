import React, { useState } from 'react';
export default function Register() {

    const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showCustomerName, setShowCustomerName] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setShowCustomerName(true);
    };



return (
<div className="container mt-5">
      <h1>Customer Registration Form</h1>
      <form  onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="firstNameInput" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstNameInput" data-toggle="tooltip" data-placement="top" title="Enter your first name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastNameInput" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastNameInput" data-toggle="tooltip" data-placement="top" title="Enter your last name" />
        </div>
        <div className="mb-3">
          <label htmlFor="dobInput" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dobInput" data-toggle="tooltip" data-placement="top" title="Enter your date of birth" />
        </div>
        <div className="mb-3">
          <label htmlFor="genderSelect" className="form-label">Gender</label>
          <select className="form-select" id="genderSelect" data-toggle="tooltip" data-placement="top" title="Select your gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {showCustomerName && (
        <p className="mt-3 text-success">
          Customer ID: {firstName}
        </p>
      )}
    </div>
)

}