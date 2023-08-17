import React, { useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteCustomer } from '../Services/custservice'


export default function Contact() {


  // let {id} = useParams()

  let navigate = useNavigate()

  
  const [id, setId] = useState('');
  const [userData, setUserData] = useState(null);
  const [invalidId, setInvalidId] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate data retrieval based on the entered ID (Replace this with your data retrieval logic)
    const retrievedUserData = {
      id: id,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      dob: '1990-01-01',
      job: 'Software Engineer',
    };


    if (retrievedUserData.id) {
      setUserData(retrievedUserData);
      setInvalidId(false);
    } else {
      setUserData(null);
      setInvalidId(true);
    }

    setUserData(retrievedUserData);
  };

    const handleDelete = () => {
      setUserData(null);
    };



return (
<div>
<div class="container mt-5">
    <h1>Cancel Page</h1>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="idInput" class="form-label">Enter ID</label>
        <input type="text" class="form-control" id="idInput" placeholder="Enter the ID"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  {invalidId && (
        <div className="alert alert-danger mt-3">
          Invalid ID
        </div>
      )}

  {!invalidId && userData && (
        <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">User Data</h3>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>DOB:</strong> {userData.dob}</p>
          <p><strong>Job:</strong> {userData.job}</p>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
      )}
  </div>  
)
}