// AllUserData.jsx
import React, { useState } from 'react';
import './AllUserData.css'; // Import your external CSS file

const AllUserData = () => {
  const [formData, setFormData] = useState({
    name: '',
    vehicleNo: '',
    earnings: '',
    expenses: '',
    date: '',
    work: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); // For demonstration, you can replace this with your actual form submission logic
  };

  return (
    <div className="form-container">
      <h3 className="title">Welcome User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group-half">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="vehicleNo">Vehicle Number:</label>
            <input
              type="text"
              id="vehicleNo"
              name="vehicleNo"
              value={formData.vehicleNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group-half">
            <label htmlFor="earnings">Earnings:</label>
            <input
              type="text"
              id="earnings"
              name="earnings"
              value={formData.earnings}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="expenses">Expenses:</label>
            <input
              type="text"
              id="expenses"
              name="expenses"
              value={formData.expenses}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="work">Work:</label>
          <textarea
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AllUserData;
