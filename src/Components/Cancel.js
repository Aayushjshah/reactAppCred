import { useNavigate, useParams,NavLink, Outlet } from 'react-router-dom'
import { deleteCustomer } from '../Services/custservice'
import React, { useEffect, useState } from 'react'


export default function Contact() {


  // let {id} = useParams()

  // let navigate = useNavigate()

  // const delCustomer = ()=>{
  //   deleteCustomer(Number(id))
  //   .then(res=>navigate('/'))
  // }
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  }



return (
<div class="container mt-5">
    <h1>Cancel Page</h1>
    <form>
      <div class="mb-3">
        <label for="idInput" class="form-label">Enter ID</label>
        <input type="text" class="form-control" id="message" name="message" onChange={handleChange} value={message} placeholder="Enter the ID"/>
        <NavLink to={`/cancel/${message}`}>
        <button type="submit" class="btn btn-primary">Submit</button>
        </NavLink>
      </div>
    </form>
  </div>
)
}