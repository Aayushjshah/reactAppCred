import React, { useEffect, useState } from 'react'
import {getAllCustomer, getAllEmployees} from '../Services/custservice'
import { NavLink, Outlet } from 'react-router-dom';
export default function Home() {
    const [customers, setcustomer] = useState([])

    useEffect(()=>{
        getAllCustomer().then(customers=>setcustomer(customers));
    },[])

    const [message, setMessage] = useState('');

    const handleChange = event => {
      setMessage(event.target.value);
    }
 

  return (
    <div>
        {/* <p>{JSON.stringify(employees)}</p> */}
        <div className='row mt-5'>
            <ul className="list-group list-group-flush">
               {  <select id="message" name="message" onChange={handleChange} value={message} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected >Select Customer Name</option>
                    {customers.length &&(
                    customers.map(customer => (

                        
                        <option >{customer.firstName} {customer.lastName}</option>

                    ))
                    )}
                    </select>

                }

<h1>{message}</h1>

                



            </ul>
            
        </div>
    </div>
  )
}