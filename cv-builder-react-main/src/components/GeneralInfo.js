import React, { Component } from 'react';

// A section to add general information like name, email, phone number.

class GeneralInfo extends Component {
  render() {
    const { cvFirstName, cvLastName, email, phoneNumber, address } = this.props;
    return (
      <>
        <p>Personal Information</p>
        <form className="generalinfo-container">
          <label htmlFor="cvFirstName">First Name:</label>
          <input
            id="cvFirstName"
            name="cvFirstName"
            type="text"
            value={cvFirstName}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="cvLastName">Last Name:</label>
          <input
            id="cvLastName"
            name="cvLastName"
            type="text"
            value={cvLastName}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            type="text"
            value={address}
            onChange={this.props.onChange}
            required
          />
        </form>
      </>
    );
  }
}

export default GeneralInfo;
