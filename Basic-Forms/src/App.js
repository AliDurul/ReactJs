import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    adress: "",
    email: "",
  });
const [table, setTable] = useState()

  const { firstName, lastName, phoneNumber, adress, email } = values;

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   setTable(values)

    setValues({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      adress: "",
      email: "",
    });
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/*  <div className="success-message">
            Success! Thank you for registering
          </div> */}

        <input
          onChange={handleValues}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          value={firstName}
        />
        <span>{values.firstName}</span>
        <input
          onChange={handleValues}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
          value={lastName}
        />
        <span>{values.lastName}</span>
        <input
          onChange={handleValues}
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          value={phoneNumber}
        />
        <span>{values.phoneNumber}</span>
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleValues}
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="adress"
          required
          value={adress}
        />
        <span>{values.adress}</span>

        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleValues}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
        />
        <span>{values.email}</span>

        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
     { table && <table>
        <tr>
          <th>First Name</th>
          <td>{table && table.firstName}</td>
        </tr>
        <tr>
          <th>last Name</th>
          <td>{table && table.lastName}</td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>{table && table.phoneNumber}</td>
        </tr>
        <tr>
          <th>Adress</th>
          <td>{table && table.adress}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{table && table.email}</td>
        </tr>
      </table>}
    </div>
  );
}
