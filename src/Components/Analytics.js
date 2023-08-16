import React, { useEffect, useState } from 'react'
import {gettransactionMerchant,gettransactionCity,gettransactionCategory,gettransactionJob,gettransactionState} from '../Services/transacservice'
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'




export default function Home() {
  let {id} = useParams()
  let navigate = useNavigate()


    const [transactions, settransaction] = useState([]);
    const [cities,setcity]=useState([]);
    const [jobs,setjob]=useState([]);
    const [categories,setcategory]=useState([]);
    const [states,setstate]=useState([]);



    useEffect(()=>{
      gettransactionMerchant().then(transactions=>settransaction(transactions));
  },[])
  
  useEffect(()=>{
    gettransactionCity().then(cities=>setcity(cities));
},[])
useEffect(()=>{
  gettransactionCategory().then(categories=>setcategory(categories));
},[]) 
 useEffect(()=>{
  gettransactionJob().then(jobs=>setjob(jobs));
},[])  
 useEffect(()=>{
  gettransactionState().then(states=>setstate(states));
},[])



return (
  <div>
      {/* <p>{JSON.stringify(employees)}</p> */}
      <div className='row mt-5'>
          {/* <div className='col-md-3' style={{borderRight:'2px solid black'}}>
          <ul className="list-group list-group-flush">
              {  
                  cities.length &&(
                  cities.map(citi => (
                      <li key={citi.city} className="list-group-item">
                      {/* <NavLink to={`/${customer.customerId}`}>
                          {customer.firstName}
                      </NavLink> */}
                      {/* {citi.city}
                      
                      </li>
                  ))
                  )
              }
          </ul></div> */} */}
          {/* <div className='container mt-5'>

          {  
                                    transactions.length &&(
                                    transactions.map(transaction => (
                                        <li key={transaction.merchant} className="list-group-item">
                                        {/* <NavLink to={`/${customer.customerId}`}>
                                            {customer.firstName}
                                        </NavLink> */}
                                        {/* {transaction.merchant}
                                        
                                        </li>
                                    ))
                                    )
                                }

                                </div> */} */}

                                <div className='container mt-5'>

{  
                          jobs.length &&(
                        jobs.map(job => (
                              <li key={job.Job} className="list-group-item">
                              {/* <NavLink to={`/${customer.customerId}`}>
                                  {customer.firstName}
                              </NavLink> */}
{job.Job}                              
                              </li>
                          ))
                          )
                      }
                      
                      </div>
                      {/* <div className='container mt-5'>

{  
                          cities.length &&(
                          cities.map(citi => (
                              <li key={citi.city} className="list-group-item">
                              {/* <NavLink to={`/${customer.customerId}`}>
                                  {customer.firstName}
                              </NavLink> */}
                              {/* {citi.city}
                              
                              </li>
                          ))
                          )
                      }
                      
                      </div> */} */}
                      <div className='container mt-5'>

{  
                          categories.length &&(
                          categories.map(catrgorie => (
                              <li key={catrgorie.category} className="list-group-item">
                              {/* <NavLink to={`/${customer.customerId}`}>
                                  {customer.firstName}
                              </NavLink> */}
{categories.category}                              
                              </li>
                          ))
                          )
                      }
                      
                      </div>

                      {/* <div className='container mt-5'> */}

{/* {  
                        states.length &&(
                          states.map(state => (
                              <li key={state.state} className="list-group-item">
                              {/* <NavLink to={`/${customer.customerId}`}>
                                  {customer.firstName}
                              </NavLink> */}
                              {/* {state.state}
                              
                              </li>
                          ))
                          )
                      }
                       */} */}
                      {/* </div> */}

          
          <div className='col-md-9'>
              
              <Outlet/>
          
          </div>
      </div>
  </div>



)

}