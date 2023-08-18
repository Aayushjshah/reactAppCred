import React, { useEffect, useState } from 'react'
// import { Pie } from 'react-chartjs-2';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'; 

// import BarChart from './BarChart';
import {gettransactionMerchant,gettransactionCity,gettransactionCategory,gettransactionJob,gettransactionState,gettransactionGender,gettransactionTopMerchant} from '../Services/transacservice'
import { NavLink, Outlet,useNavigate, useParams } from 'react-router-dom';
import "../App.css"


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
    const [genders,setgender]=useState([]);



    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');


    const handleChange = event => {
      setMessage(event.target.value);
    }
    const handleChange2 = event => {
      setMessage2(event.target.value);
      gettransactionTopMerchant(Number(message2)).then(topMerchants=>settopMerchants(topMerchants));

    }
    const [topMerchants,settopMerchants]=useState([]);






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
// useEffect(()=>{
// },[])



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


    

{  <select id="message2" name="message2" onChange={handleChange2} value={message2}class="form-select" aria-label="Default select example">
                      <option selected >Select limit</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      </select>
}


                  {topMerchants.length &&(
                  topMerchants.map(topmerch => (
                    <ul className="list-group list-group-flush">

<li>
  <p></p>
    <h5 class="card-title">Merchant Name: {topmerch.merchant} </h5>
    <h6 class="card-subtitle">Total Amount :{topmerch.total_amt}</h6>
    <h6 class="card-text">State:{topmerch.state}</h6>
    <h6 class="card-text">City:{topmerch.city}</h6>
    <h6 class="card-text">City Population:{topmerch.cityPopulation}</h6>
     <p></p>     
                      
                      </li></ul>

                  ))
                  )}
              
              {/* <h2>City: {message}</h2>
              
              <h2>Total Amount:{}</h2>
           */}



 

</div>}
  </div>

  );
}

function CityFilter({ onFilterChange }) {
  return (
    <div>
      <h3>City Filter</h3>
      {        <div className='container mt-5'> 



{  <select id="message" name="message" onChange={handleChange} value={message}class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected >Select City</option>
                    {cities.length &&(
                    cities.map(city => (

                        
                        <option value={city.total_amt}>{city.city}</option>

                    ))
                    )}
                    </select>
                }
                
                <h2>Total Amount:{message}</h2>
            



   

</div>}
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
      <h3>SpendingCategoryFilter</h3>


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
      {jobs.length &&(
         jobs.map(job => (
              <li key={job.job} className="list-group-item">
             {job.job}
              
              </li>
          ))
          )}
    </div>
  );
}
function AmtOfSpendingFilter({ onFilterChange }) {
  return (
    <div>
      <h3>AmtOfSpendingFilter</h3>
      {/* Implement your sex filter UI here */}
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