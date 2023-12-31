import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';
import {gettransactionMerchant,gettransactionCity,gettransactionCategory,gettransactionJob,gettransactionState,gettransactionGender} from '../Services/transacservice'
import { NavLink, Outlet,useNavigate, useParams } from 'react-router-dom';



  
  
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


function GenderFilter({ onFilterChange }) {
  return (
    <div>
      <h3>Age Filters</h3>
      {
       genders.length &&(
          genders.map(gender => (
              <li key={gender.gender} className="list-group-item">
             {gender.gender} {gender.total_amt}
              
              </li>
          ))
          )
      }
    </div>
  );
}


function MerchantFilter({ onFilterChange }) {
  return (
    <div>
      <h3>MerchantFilter</h3>
      {
        merchants.length &&(
          merchants.map(merchant => (
              <li key={merchant.merchant} className="list-group-item">
             {merchant.merchant}
              
              </li>
          ))
          )
          


      }
    </div>
  );
}
function CityFilter({ onFilterChange }) {
  return (
    <div>
      <h3>City Filter</h3>
      {        <div className='container mt-5'> 

{cities.length &&(
   cities.map(city => (
       <li key={city.city} className="list-group-item">
      {city.city}
       
       </li>
   ))
   )
   }

</div>}
    </div>
  );
}
function StateFilter({ onFilterChange }) {
  return (
    <div>
      <h3>StateFilter</h3>
      {
        <div className='container mt-5'> 

                       {states.length &&(
                          states.map(state => (
                              <li key={state.state} className="list-group-item">
                             {state.state}
                              
                              </li>
                          ))
                          )
                          }
                       
                       </div>
      
      }
    </div>
  );
}
function SpendingCategoryFilter({ onFilterChange }) {
  return (
    <div>
      <h3>SpendingCategoryFilter</h3>
      {
           <div className='container mt-5'> 

           {categories.length &&(
              categories.map(categorie => (
                  <li key={categorie.category} className="list-group-item">
                 {categorie.category}
                  
                  </li>
              ))
              )
              }
           
           </div>


      }
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