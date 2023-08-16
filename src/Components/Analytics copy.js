import React, { useEffect, useState } from 'react'
import {getAllCustomer, getAllEmployees} from '../Services/custservice'
import { NavLink, Outlet } from 'react-router-dom';
export default function Home() {
    const [filterValue, setFilterValue] = useState('');
  const [dataList, setDataList] = useState([
    { id: 1, name: 'Aayush', age: 28 },
    { id: 12, name: 'Aman', age: 29 },
    { id: 13, name: 'Aarti', age: 30 },
    { id: 1, name: 'Aayush', age: 28 },
    { id: 2, name: 'Diksha', age: 32 },
    { id: 3, name: 'Sakshi', age: 25 },
    // Add more data entries here
  ]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredData = dataList.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>Spending History</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="filterInput" className="form-label">
            Filter by Name
          </label>
          <input
            type="text"
            className="form-control"
            id="filterInput"
            value={filterValue}
            onChange={handleFilterChange}
            data-toggle="tooltip"
            data-placement="top"
            title="Enter a name to filter the data"
          />
        </div>
      </form>

      <div className="mt-4">
        <h2>Filtered</h2>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              {item.name}, Avg Spend: {item.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}