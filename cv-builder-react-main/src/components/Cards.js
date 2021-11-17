import React from 'react';
import uniqid from 'uniqid';
// uniqd to generate key for 'map' iteration

// Card displayed in the 'form'
function CardWork(props) {
  return props.company.map((element, index) => (
    <div key={uniqid()} className="card">
      <p>Company: {element}</p>
      <p>Position: {props.position[index]}</p>
      <p>Job tasks: {props.tasks[index]}</p>
      <p className="card-date">
        {props.fromWork[index]} -- {props.toWork[index]}
      </p>
      <button onClick={() => props.onClick(props, index)}>Delete</button>
    </div>
  ));
}

// Card displayed in the 'form'
function CardEducation(props) {
  return props.school.map((element, index) => (
    <div key={uniqid()} className="card">
      <p>School: {element}</p>
      <p>Study Title: {props.titleStudy[index]}</p>
      <p className="card-date">
        {props.fromEducation[index]} -- {props.toEducation[index]}
      </p>
      <button onClick={() => props.onClick(props, index)}>Delete</button>
    </div>
  ));
}

// CV view component
function CVcard(props) {
  const educationCards = (
    <div className="educationalinfo-container info-container">
      <h1>Education</h1>
      {props.school.map((element, index) => (
        <div key={uniqid()} className="cv-card">
          <p>School: {element}</p>
          <p>Study Title: {props.titleStudy[index]}</p>
          <p className="cv-date">
            {props.fromEducation[index]} -- {props.toEducation[index]}
          </p>
        </div>
      ))}
    </div>
  );

  const workCards = (
    <div className="workinfo-container info-container">
      <h1>Experience</h1>
      {props.company.map((element, index) => (
        <div key={uniqid()} className="cv-card">
          <p>Company: {element}</p>
          <p>Position: {props.position[index]}</p>
          <p>Job tasks: {props.tasks[index]}</p>
          <p className="cv-date">
            {props.fromWork[index]} -- {props.toWork[index]}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="generalinfo-container info-container">
        <h1>Personal Information</h1>
        <p>{props.cvFirstName}</p>
        <p>{props.cvLastName}</p>
        <p>{props.email}</p>
        <p>{props.phoneNumber}</p>
        <p>{props.address}</p>
      </div>
      {educationCards}
      {workCards}
    </>
  );
}

export { CardWork, CardEducation, CVcard };
