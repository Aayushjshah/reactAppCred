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
      <div className='container mt-5'>
        <h1>FirstName : {customers.firstName}</h1>
       
    </div>



      <button type="submit" class="btn btn-primary"onClick={delCustomer}>DELETE</button>
    </form>
  </div>
)
}