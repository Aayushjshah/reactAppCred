import React, { useEffect, useState } from 'react'
import {getAllCustomer, getAllEmployees} from '../Services/custservice'
import { NavLink, Outlet } from 'react-router-dom';
export default function Home() {
    const [customers, setcustomer] = useState([])

    useEffect(()=>{
        getAllCustomer().then(customers=>setcustomer(customers));
    },[])
  return (
    <div>
        {/* <p>{JSON.stringify(employees)}</p> */}
        <div className='row mt-5'>
            <ul className="list-group list-group-flush">
                {  
                    customers.length &&(
                    customers.map(customer => (
                        <li key={customer.customerId} className="list-group-item">
                        {/* <NavLink to={`/${customer.customerId}`}> */}
                        <div class="card">
                 <div class="card-body">
                 <a href={`/${customer.customerId}`} class="card-link">  {customer.firstName} {customer.lastName}
</a>


  </div>
</div>

                        {/* </NavLink> */}
                        </li>
                    ))
                    )
                }
                



            </ul>
            
        </div>
    </div>
  )
}