import React, { useState,useTransition  } from 'react';
import { useNavigate } from 'react-router-dom'
import { addCustomer } from '../Services/custservice';
import '../home.css'

export default function About() {

  const teamMembers = [
    { name: 'Pratyaksha', role: 'Developer' },
    { name: 'Sakshi', role: 'Designer' },
    { name: 'Aayush', role: 'Developer'},
    { name: 'Anugya', role: 'Designer'},
    { name: 'Diksha', role: 'Developer'},
    { name: 'Shubham', role: 'Developer'},
  ];

  return (
    <div className="container">
    <h2 className="mt-4 text-center">Meet the Team</h2>
    <div className="row justify-content-center">
      <div className="col-md-4 mt-4">
        <div className="card text-center">
          {/* <img
            // src="C:/Users/Acer/workspace/angular/DIkhsha Nudea Citi 23/CRED/public/TeamMembers/aayush.jpg" // Replace with mentor's image URL
            // alt="Mentor"
            // className="card-img-top rounded-circle mx-auto mt-3"
            // style={{ width: '150px', height: '150px' }}
          /> */}
          <div className="card-body">
            <h5 className="card-title">Muskaan</h5>
            <p className="card-text">Team Mentor</p>
            <p className="card-text"><strong>Team:</strong> Muskaan1</p>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      {teamMembers.map((member, index) => (
        <div key={index} className="col-md-4 mt-4">
          <div className="card text-center">
            {/* <img
            //   src={member.imgUrl} // Replace with team member's image URL
            //   alt={member.name}
            // src = "./aayush.jpg"
              className="card-img-top rounded-circle mx-auto mt-3"
              style={{ width: '150px', height: '150px' }}
            /> */}
            <div className="card-body">
              <h5 className="card-title">{member.name}</h5>
              <p className="card-text">{member.role}</p>
              <p className="card-text"><strong>Team:</strong> Muskaan1</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};


