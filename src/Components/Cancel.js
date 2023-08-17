import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteCustomer } from '../Services/custservice'


export default function Contact() {


  let {id} = useParams()

  let navigate = useNavigate()

  const delCustomer = ()=>{
    deleteCustomer(Number(id))
    .then(res=>navigate('/'))
  }



return (
<div class="container mt-5">
    <h1>Cancel Page</h1>
    <form>
      <div class="mb-3">
        <label for="idInput" class="form-label">Enter ID</label>
        <input type="text" class="form-control" id="idInput" placeholder="Enter the ID"/>
      </div>
      <button type="submit" class="btn btn-primary"onClick={delCustomer}>Submit</button>
    </form>
  </div>
)
}