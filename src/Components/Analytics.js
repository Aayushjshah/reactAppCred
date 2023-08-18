import React, { useEffect, useState } from 'react'
// import { Pie } from 'react-chartjs-2';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'; 

// import BarChart from './BarChart';
import {gettransactionMerchant,gettransactionCity,gettransactionCategory,gettransactionspendingByAmount,gettransactionJob,gettransactionState,gettransactionGender,gettransactionTopMerchant} from '../Services/transacservice'
import { NavLink, Outlet,useNavigate, useParams } from 'react-router-dom';
import "../App.css"
import { getCustomerById } from '../Services/custservice';

// Sample data
// const data = [
//   { name: 'Male', value: 120 },
//   { name: 'Female', value: 80 },
// ];

const COLORS = ['#36A2EB', '#FF6384'];
  
export default function Analytics() {
  const [activeFilter, setActiveFilter] = useState(null);


  let {id} = useParams()
  let navigate = useNavigate()

 
    const [merchants, setmerchants] = useState([]);
    const [cities,setcity]=useState([]);
    const [jobs,setjob]=useState([]);
    const [categories,setcategory]=useState([]);
    const [states,setstate]=useState([]);
    const [spending,setspending]=useState([]);

    const [genders,setgender]=useState([]);


    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState(5);
    const [message3, setMessage3] = useState('');
    // const [low, setlow] = useState(100);
    const [high, sethigh] = useState(1001);


    

    const [topMerchants,settopMerchants]=useState([]);

    const handleChange = event => {
      setMessage(event.target.value);
    }
    const handleChange2 = event => {
      setMessage2(event.target.value);

    }
    const handleChange3 = event => {
      setMessage3(event.target.value);

    }

 
    const handleChangehigh = event => {
      sethigh(event.target.value);

    }
    



    useEffect(()=>{
      gettransactionMerchant().then(merchants=>setmerchants(merchants));
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

useEffect(()=>{
  gettransactionGender().then(gender=>setgender(gender));
},[])
useEffect(()=>{
  gettransactionTopMerchant(Number(message2)).then(topMerchants=>settopMerchants(topMerchants));

},[message2])
useEffect(()=>{
  gettransactionspendingByAmount(high).then(spending=>setspending(spending));

},[high])




const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
function GenderFilter({ onFilterChange }) {
  

    const data = genders.map((gender) => ({
     name: gender.gender,
     value: gender.total_amt,
     color: generateRandomColor()
   }));
  return (
    <div>
      {/* <h3>Age Filters</h3> */}
      {/* {
       genders.length &&(
          genders.map(gender => (
              <li key={gender.gender} className="list-group-item">
             {gender.gender} {gender.total_amt}
              
              </li>
              // <PieChart />
              
          ))
          )
      } */}
      {/* <PieChart width={700} height={700}>
            <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart> */}
<div>
  
<PieChart width={700} height={700}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={400}
        cy={300}
        outerRadius={250}
        fill="#8884d8"
        label={(entry) => `${entry.name} ${(entry.percent * 100).toFixed(2)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `${value} students`} />
      <Legend />
    </PieChart>
    </div>
    </div>
  );
}


function MerchantFilter({ onFilterChange }) {
  return (
    
    <div>
    <h3>Top  Merchants</h3>
    {        <div className='container mt-5'> 


    
 { 
  <div><h5>Select the limit for top merchants</h5>
 <select id="message2" name="message2" onChange={handleChange2} value={message2}class="form-select" aria-label="Default select example">
                      <option selected >Select limit</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      </select>
                      <h3></h3>
                      <h3></h3>
                      <h3> The top {message2} merchants are:</h3>
                      <h3></h3>
                      <h3></h3>
 </div>
}

<div className="container">
  <div className="row">
    <div className="col">
      {topMerchants.length && (
        <ul className="list-group list-group-flush">
          {topMerchants.map((topmerch, index) => (
            <li className="list-group-item" key={index}>
              <h5 className="card-title">Name: {topmerch.merchant}</h5>
              <h6 className="card-subtitle">Total Amount: {topmerch.total_amt}</h6>
              <p className="card-text">State: {topmerch.state}</p>
              <p className="card-text">City: {topmerch.city}</p>
              <p className="card-text">City Population: {topmerch.cityPopulation}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>
      
 

</div>}
  </div>

  );
}

function CityFilter({ onFilterChange }) {
  return (
    <div>
  <h3>City Filter</h3>
  <div className='container mt-5'>
    <select
      id="message"
      name="message"
      onChange={handleChange}
      value={message}
      className="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
    >
      <option value="" disabled selected>
        Select City
      </option>
      {cities.length && (
        cities.map((city, index) => (
          <option key={index} value={city.total_amt}>
            {city.city}
          </option>
        ))
      )}
    </select>
    <div className="bg-light p-3">
      <h2 className="text-success">Total Amount: {message}</h2>
    </div>
  </div>
</div>

  );
}
function StateFilter({ onFilterChange }) {
  const data = states.map((state) => ({
    name: state.state,
    value: state.total_amt,
    color: generateRandomColor()
  }));
  return (
    // <div>
      
      <div className="pie-chart-container">
      <PieChart width={700} height={700}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={400}
        cy={300}
        outerRadius={250}
        fill="#8884d8"
        label={(entry) => `${entry.name} ${(entry.percent * 100).toFixed(2)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `${value} students`} />
      <Legend />
    </PieChart>
      </div>

    
  );
}
function SpendingCategoryFilter({ onFilterChange }) {
  const data = categories.map((categorie) => ({
    name: categorie.category,
    value: categorie.total_amt,
    label: categorie.total_amt,
    color: generateRandomColor()
  }));
  return (
    <div>
      {/* <h3>SpendingCategoryFilter</h3> */}

    {/* <BarChart> */}
    <div className="bar-chart-container">
      <BarChart width={700} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
      </div>
      </div>
  );
}

function PopulationGroupsFilter({ onFilterChange }) {
  return (
    <div>
  <h3>Profession</h3>
  {jobs.length && (
    <ul className="list-group">
      {jobs.map((job, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <h5><div>{job.job}</div></h5>
          <div className="badge bg-success">{job.total_amt}</div>
        </li>
      ))}
    </ul>
  )}
</div>

  );
}
function AmtOfSpendingFilter({ onFilterChange }) {
  return (
    <div>
      <h3>AmtOfSpendingFilter</h3>
      {
        <div>
     <div className='container mt-5'>   
        <label for="customRange2" class="form-label">Spending Range</label>
      <input type="range" class="form-range" min="1001" max="5000" id="high" name="high" onChange={handleChangehigh} value={high}  ></input>
   {high}
    </div>
    
    {
   spending.length &&(
    spending.map(spend=> (
         <li key={spend.cutomerId} className="list-group-item">
        <h5>Cutomer Id:{spend.customerId}</h5><h6> Spending Amount:{spend.amt}</h6>
         
         </li>
     ))
     )
 
    }</div>
      }
    </div>
  );
    }








  const handleFilterClick = (filterName) => {
    console.log(filterName)
    setActiveFilter(filterName);
  };

  const renderFilterComponent = () => {
    switch (activeFilter) {
      case 'gender':
        return <GenderFilter />;
      case 'spending-category':
        return <SpendingCategoryFilter />;
      case 'merchant':
        return <MerchantFilter />;
      case 'city':
        return <CityFilter />;
      case 'state':
        return <StateFilter />;
      case 'population-groups':
        return <PopulationGroupsFilter />;
      case 'amt-of-spending':
        return <AmtOfSpendingFilter />;  
        default:
        return null;
    }
  };

  // const [ageFilter, setAgeFilter] = useState('');
  // const [sexFilter, setSexFilter] = useState('');
  // const [cityFilter, setCityFilter] = useState('');
  // const [profiles, setProfiles] = useState([
  //   { id: 1, name: 'Aayush', age: 25, sex: 'female', city: 'New York' },
  //   { id: 2, name: 'Diksha', age: 32, sex: 'male', city: 'Los Angeles' },
  //   { id: 3, name: 'Sakshi', age: 28, sex: 'male', city: 'Chicago' },
  //   // Add more profiles here
  // ]);

  // const filteredProfiles = profiles.filter(
  //   (profile) =>
  //     (ageFilter === '' || profile.age === parseInt(ageFilter)) &&
  //     (sexFilter === '' || profile.sex === sexFilter) &&
  //     (cityFilter === '' || profile.city.toLowerCase().includes(cityFilter.toLowerCase()))
  // );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
            >
              Filter By : 
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'gender' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('gender')}
              >
              Gender
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'spending-category' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('spending-category')}
              >
              Spending  Category
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'merchant' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('merchant')}
              >
              Merchant
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'city' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('city')}
              >
              City
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'state' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('state')}
              >
              State
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'population-groups' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('population-groups')}
              >
                Profession
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${
                  activeFilter === 'amt-of-spending' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('amt-of-spending')}
              >
              Amt of Spending
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <h1>Explore Profiles</h1>
          {renderFilterComponent()}
          {/* Profile list */}
          {/* Display profiles based on active filter */}
        </div>
      </div>
    </div>
  );

}