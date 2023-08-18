import React, { useEffect, useState } from 'react'
import {getAllCustomer, getAllEmployees} from '../Services/custservice'
import { NavLink, Outlet } from 'react-router-dom';
export default function Home() {
    const [customers, setcustomer] = useState([])

    useEffect(()=>{
        getAllCustomer().then(customers=>setcustomer(customers));
    },[])

    const [message, setMessage] = useState('')

    const handleChange = event => {
      setMessage(event.target.value);
     
    }
  //   const [searchId, setSearchId] = useState('');
  // const [foundUser, setFoundUser] = useState(null);

  // const handleSearch = () => {
  //   const user = customers.find(user => user.id === searchId);
  //   setFoundUser(user);
  // };

//     const renderdata=(id)=>
//     {
// return (
//   customers
//   .filter(({cust}) => cust.customerId===id)
//   .map(cust => (
// <div>
// <h1>Customer ID:{cust.customerId}</h1>
// <h2>Customer First Name:{cust.firstName}</h2>
// <h2>Customer Last Name:{cust.lastName}</h2>
// <h1>Customer Gender:{cust.gender}</h1>
// <h1>Customer Job:{cust.job}</h1>
// <h1>Customer DOB:{cust.dob}</h1>

// </div>
//   )))}


  

 

  // return (
  //   <div>
  //     <h2>User Search</h2>
  //     <input
  //       type="text"
  //       value={searchId}
  //       onChange={(e) => setSearchId(e.target.value)}
  //     />
  //     <button onClick={handleSearch}>Search</button>
 

  return (
    <div>
        {/* <p>{JSON.stringify(employees)}</p> */}
        <div className='row mt-5'>
            <ul className="list-group list-group-flush">
               {  <select id="message" name="message" onChange={handleChange} value={message} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected >Select Customer Name</option>
                    {customers.length &&(
                    customers.map(customer => (

                        
                        <option value={customer.customerId} onChange={handleChange}>{customer.firstName} {customer.lastName}</option>
                      

                    ))
                    )}
                    </select>

                }
                {/* <renderdata/> */}
                {/* {renderdata(message)} */}
<h1>Customer Id: {message}</h1>

                



            </ul>
            
        </div>
    </div>
  )
}