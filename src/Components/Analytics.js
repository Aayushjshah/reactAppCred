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
            <div className='col-md-3' style={{borderRight:'2px solid black'}}>
            <ul className="list-group list-group-flush">
                {  
                    customers.length &&(
                    customers.map(customer => (
                        <li key={customer.customerId} className="list-group-item">
                        <NavLink to={`/${customer.customerId}`}>
                            {customer.firstName}
                        </NavLink>
                        </li>
                    ))
                    )
                }
            </ul>
            </div>
            <div className='col-md-9'>
                
                <Outlet/>
            </div>
        </div>
    </div>
  )
}