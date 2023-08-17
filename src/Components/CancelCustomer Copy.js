import { useNavigate, useParams } from 'react-router-dom'
import { deleteCustomer } from '../Services/custservice'
import { getCustomerById } from '../Services/custservice'
import React, { useEffect, useState } from 'react'

export default function Contact() {


  let {id} = useParams()

  let navigate = useNavigate()
  const [customers, setcustomer] = useState({})
  const [invalidId, setInvalidId] = useState(true);
  useEffect(()=>{
    getCustomerById(Number(id)).then(customers=>setcustomer(customers));
},[])
  const handleSubmit = (e)=>{
    let cs = getCustomerById(Number(id))
    
    getCustomerById(Number(id)).then(customers=>setcustomer(customers));
    console.log(customers)
    if (customers.id) {
      console.log('IF')
      setcustomer(customers)
      setInvalidId(false);
    }else{
      console.log('Else')
      setcustomer(null);
      setInvalidId(true);
    }
      //       setcustomers(retrievedcustomers);
      //       setInvalidId(false);
      //     } else {
      //       setcustomers(null);
      //       setInvalidId(true);
      //     }
}

// const handleSubmit = (e) => {
  //     e.preventDefault();
  // if (customers.id) {
    //       setcustomers(retrievedcustomers);
    //       setInvalidId(false);
    //     } else {
    //       setcustomers(null);
    //       setInvalidId(true);
    //     }
    
    //     setcustomers(retrievedcustomers);
    //   };

  const delCustomer = ()=>{
    deleteCustomer(Number(id))
    .then(res=>navigate('/'))
  }


  

return (
<div class="container mt-5">
    <h1>Cancel Page</h1>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="idInput" class="form-label">Enter ID</label>
        <input type="text" class="form-control" id="idInput" placeholder="Enter the ID"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      {/* <div className='container mt-5'>
        <h1>FirstName : {customers.firstName}</h1>
       
    </div> */}


    {invalidId && (
        <div className="alert alert-danger mt-3">
          Invalid ID
        </div>
      )}

  {!invalidId && customers && (
        <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">User Data</h3>
          <p><strong>ID:</strong> {customers.customerId}</p>
          <p><strong>First Name:</strong> {customers.firstName}</p>
          <p><strong>Last Name:</strong> {customers.lastName}</p>
          <p><strong>Gender:</strong> {customers.gender}</p>
          <p><strong>DOB:</strong> {customers.dob}</p>
          <p><strong>Job:</strong> {customers.job}</p>
          <button onClick={delCustomer} className="btn btn-danger">Delete</button>
        </div>
      </div>
      )}


      {/* <button type="submit" class="btn btn-primary"onClick={delCustomer}>DELETE</button> */}
    
  </div>
)
}