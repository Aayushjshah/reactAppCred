import React, { useEffect, useState } from 'react'
import {gettransactionMerchant,gettransactionCity} from '../Services/transacservice'
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'




export default function Home() {
  let {id} = useParams()


    // const [transactions, settransaction] = useState([]);
    const [cities,setcity]=useState([]);
  //   useEffect(()=>{
  //     gettransactionMerchant().then(transactions=>settransaction(transactions));
  // },[])
  useEffect(()=>{
    gettransactionCity((id)).then(cities=>setcity(cities))
})

  // const handleFilterChange = (event) => {
  //   settransaction(event.target.value);
  // };

  // const filteredData = dataList.filter((item) =>
  //   item.name.toLowerCase().includes(transactions.toLowerCase())
  // );

  // return (
  //   <div className="container mt-5">
  //     <h1>Spending History</h1>
  //     <form>
  //       <div className="mb-3">
  //         <label htmlFor="filterInput" className="form-label">
  //           Filter by Name
  //         </label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="filterInput"
  //           value={transactions}
  //           onChange={handleFilterChange}
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Enter a name to filter the data"
  //         />
  //       </div>
  //     </form>

  //     <div className="mt-4">
  //       <h2>Filtered</h2>
  //       {/* <ul>
  //         {filteredData.map((item) => (
  //           <li key={item.merchant}>
  //             {item.merchant}, Avg Spend: {item.age}
  //           </li>
  //         ))}
  //       </ul> */}
  //     </div>
  //   </div>
  // );


//   return (
//     <div>
//         {/* <p>{JSON.stringify(employees)}</p> */}
//         <div className='row mt-5'>
//             <div className='col-md-3' style={{borderRight:'2px solid black'}}>
//             <ul className="list-group list-group-flush">
//                 {  
//                     transactions.length &&(
//                     transactions.map(transaction => (
//                         <li key={transaction.merchant} className="list-group-item">
//                         {/* <NavLink to={`/${customer.customerId}`}>
//                             {customer.firstName}
//                         </NavLink> */}
//                         {transaction.merchant}
                        
//                         </li>
//                     ))
//                     )
//                 }
//             </ul>
//             </div>
//             <div className='col-md-9'>
                
//                 <Outlet/>
//             </div>
//         </div>
//     </div>
//   )

// }


return (
  <div>
      {/* <p>{JSON.stringify(employees)}</p> */}
      <div className='row mt-5'>
          <div className='col-md-3' style={{borderRight:'2px solid black'}}>
          <ul className="list-group list-group-flush">
              {  
                  cities.length &&(
                  cities.map(citi => (
                      <li key={citi.city} className="list-group-item">
                      {/* <NavLink to={`/${customer.customerId}`}>
                          {customer.firstName}
                      </NavLink> */}
                      {citi.city}
                      
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