import React, { useEffect, useState } from 'react'
import {gettransactionMerchant,gettransactionCity} from '../Services/transacservice'
import { NavLink, Outlet } from 'react-router-dom';

import BarChart from './BarChart';


function GenderFilter({ onFilterChange }) {
  return (
    <div>
      <h3>Age Filters</h3>
      {/* Implement your age filter UI here */}
      {/* <BarChart /> */}
    </div>
  );
}


function MerchantFilter({ onFilterChange }) {
  return (
    <div>
      <h3>MerchantFilter</h3>
      {/* Implement your sex filter UI here */}
    </div>
  );
}
function CityFilter({ onFilterChange }) {
  return (
    <div>
      <h3>City Filter</h3>
      {/* Implement your city filter UI here */}
    </div>
  );
}
function StateFilter({ onFilterChange }) {
  return (
    <div>
      <h3>StateFilter</h3>
      {/* Implement your sex filter UI here */}
    </div>
  );
}
function SpendingCategoryFilter({ onFilterChange }) {
  return (
    <div>
      <h3>SpendingCategoryFilter</h3>
      {/* Implement your sex filter UI here */}
    </div>
  );
}

function PopulationGroupsFilter({ onFilterChange }) {
  return (
    <div>
      <h3>PopulationGroupsFilter</h3>
      {/* Implement your sex filter UI here */}
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


  
  
export default function Analytics() {
  const [activeFilter, setActiveFilter] = useState(null);

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

  const [ageFilter, setAgeFilter] = useState('');
  const [sexFilter, setSexFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Aayush', age: 25, sex: 'female', city: 'New York' },
    { id: 2, name: 'Diksha', age: 32, sex: 'male', city: 'Los Angeles' },
    { id: 3, name: 'Sakshi', age: 28, sex: 'male', city: 'Chicago' },
    // Add more profiles here
  ]);

  const filteredProfiles = profiles.filter(
    (profile) =>
      (ageFilter === '' || profile.age === parseInt(ageFilter)) &&
      (sexFilter === '' || profile.sex === sexFilter) &&
      (cityFilter === '' || profile.city.toLowerCase().includes(cityFilter.toLowerCase()))
  );

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
              Population Groups
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