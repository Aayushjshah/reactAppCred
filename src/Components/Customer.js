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

    const [customer, setcustomer] = useState([])

    
    const handleChangeCustid = event => {
      setCustid(event.target.value);

    }

    useEffect(()=>{
      getCustomerById(Number(custid)).then(customer=>setcustomer(customer));
    },[custid])
    
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
               {  <select id="custid" name="custid" onChange={handleChangeCustid} value={custid} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected >Select Customer Name</option>
                    {customers.length &&(
                    customers.map(customer => (

                        
                        <option value={customer.customerId}>{customer.firstName} {customer.lastName}</option>
                      

                    ))
                    )}
                    </select>

                }
                {/* <renderdata/> */}
                {/* {renderdata(message)} */}


                
 <div>
 <h1>Customer ID:{customer.customerId}</h1>
 <h2>First Name:{customer.firstName}</h2>
 <h2>Last Name:{customer.lastName}</h2>
<h2> Gender:{customer.gender}</h2>
<h2>Job:{customer.job}</h2>
 <h2>DOB:{customer.dob}</h2>

 </div>


            </ul>
            
        </div>
    </div>
  )
}