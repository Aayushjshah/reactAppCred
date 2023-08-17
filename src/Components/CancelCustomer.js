import { useNavigate, useParams } from 'react-router-dom'
import { deleteCustomer } from '../Services/custservice'
import { getCustomerById } from '../Services/custservice'
import React, { useEffect, useState } from 'react'

export default function Contact() {


  let {id} = useParams()

  let navigate = useNavigate()
  const [customers, setcustomer] = useState({})

  useEffect(()=>{
    getCustomerById(Number(id)).then(customers=>setcustomer(customers));
},[])


  const delCustomer = ()=>{
    deleteCustomer(Number(id))
    .then(res=>navigate('/home'))
  }


  

return (
<div class="container mt-5">
    <h1>Cancel Page</h1>
    <form>
      <div class="mb-3">
        <label for="idInput" class="form-label">Enter ID</label>
        <input type="text" class="form-control" id="idInput" placeholder="Enter the ID"/>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">User Data</h3>
          <p><strong>ID:</strong> {customers.customerId}</p>
          <p><strong>First Name:</strong> {customers.firstName}</p>
          <p><strong>Last Name:</strong> {customers.lastName}</p>
          <p><strong>Gender:</strong> {customers.gender}</p>
          <p><strong>DOB:</strong> {customers.dob}</p>
          <p><strong>Job:</strong> {customers.job}</p>
          {/* <button onClick={delCustomer} className="btn btn-danger">Delete</button> */}
        </div>
      </div>



      <button type="submit" class="btn btn-primary"onClick={delCustomer}>DELETE</button>
    </form>
  </div>
)
}