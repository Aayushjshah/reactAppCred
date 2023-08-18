import React, { useState,useTransition  } from 'react';
import { useNavigate } from 'react-router-dom'
import { addCustomer } from '../Services/custservice';
import '../home.css'

export default function About() {

  const teamMembers = [
    { name: 'Pratyaksha', role: 'Backend Developer', team : 'PBWMT' },
    { name: 'Sakshi', role: 'Backend Developer' , team : 'TradeLink - Investments' },
    { name: 'Aayush', role: 'Frontend Developer' , team : 'TradeLink - Investments'},
    { name: 'Anugya', role: 'Backend Developer' , team : 'Data Analytics'},
    { name: 'Shubham', role: 'Backend Developer' , team : "PBWMT"},
    { name: 'Diksha', role: 'Frontend Developer' , team : "PBWMT" }
  ];

  return (
    <><div className="container-fluid">
    <div className="row">
      <div className="col-md-12 about-banner">
        <h1>Meet the Team SimpleStrings</h1>
      </div>
    </div>
    </div><div className="container">
        <div className="text-center">
          <h2 className="mt-4 mb-4" style={{ textDecoration: 'underline' }}>
            
          </h2>
        </div>

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
                <br></br>
                <p className="card-text">Team Mentor</p>

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
                  <p className="card-text"><strong>Team:</strong> {member.team}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></>
);
};


