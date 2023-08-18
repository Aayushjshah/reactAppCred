import React from 'react'
import '../home.css'
export default function Home() {
return (
  <div className="container-fluid">
  <div className="row">
    <div className="col-md-12 welcome-banner">
      <h1>Welcome to CardCrud</h1>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-lg-6 view-section">
      <a href="/view">
        <div className="section view">
          <h2>View</h2>
        </div>
      </a>
    </div>
    <div className="col-md-6 col-lg-6 analytics-section">
      <a href="/analytics">
        <div className="section analytics">
          <h2>Analytics</h2>
        </div>
      </a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-lg-6 create-section">
      <a href="/register">
      <div className="section create">
          <h2>Register</h2>
        </div>
    </a>
    </div>
    <div className="col-md-6 col-lg-6 cancel-section">
      <a href="/cancel">
        <div className="section cancel">
          <h2>Cancel</h2>
        </div>
      </a>
    </div>
  </div>
</div>
);
}