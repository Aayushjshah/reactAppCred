import React, { useEffect, useState } from 'react'
import {getAllCustomer, getAllEmployees} from '../Services/custservice'
import { NavLink, Outlet } from 'react-router-dom';
import { getCustomerById } from '../Services/custservice';
export default function Home() {
    const [customers, setcustomers] = useState([])
    const [custid, setCustid] = useState('');

    useEffect(()=>{
        getAllCustomer().then(customers=>setcustomers(customers));
    },[])

    const [customer, setcustomer] = useState({customerId:-1,firstName:'None', lastName:'None', gender:'None',job:'None',dob:'None'})

    
    const handleChangeCustid = event => {
      setCustid(event.target.value);

    }

    useEffect(()=>{
      getCustomerById(Number(custid)).then(customer=>setcustomer(customer));
    },[custid])
 

  return (
    <><div className="container">
      <div className="mb-4">
      {<form class="d-flex">
              <input id="custid" name="custid" value={custid} onChange={handleChangeCustid} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>


            </form>}
      </div>
      <div>

      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Customer Information</h1>
          <h2 className="card-subtitle mb-2 text-muted">Customer ID: {customer.customerId}</h2>
          <h5 className="card-text">First Name: {customer.firstName}</h5>
          <h5 className="card-text">Last Name: {customer.lastName}</h5>
          <h5 className="card-text">Gender: {customer.gender}</h5>
          <h5 className="card-text">Job: {customer.job}</h5>
          <h5 className="card-text">DOB: {customer.dob}</h5>
        </div>
      </div>
    </div></>
  )
}