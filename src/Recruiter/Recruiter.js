import React from 'react';
import './Recruiter.css';
import {useState} from "react"
import Axios from "axios"




function Recruiter() {
  
  const [jobTitle, setJob] = useState('');
  const [skillsRequired, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [city, setCity] = useState('');

  const [jobList, setJobList] = useState([])

  const addJob = () => {
    Axios.post('https://job-data.herokuapp.com/create', 
    {
      job:jobTitle,
      skill: skillsRequired,
      experience: experience,
      salary: salary,
      city: city
    }).then(()=> {
      setJobList([...jobList, {
        job:jobTitle,
        skill: skillsRequired,
        experience: experience,
        salary: salary,
        city: city
      },
    ])
    })
  }
  

  return (
    <div className="formContainer">
        <label >Job Title:</label>
        <input 
          type="text"  
          placeholder="UX developer, SE, Backend Calls..." 
          onChange={(event) => {setJob(event.target.value)}}
          required/>

        <label>Skills Required: </label>
        <input 
          type="text" 
          placeholder="C++, React, English Speaking, Content Writing..."
          onChange={(event) => {setSkills(event.target.value)}} 
          required/>

        <label >Experience Required: </label>
        <input 
          type="text" 
          placeholder="1Y, 2Y, NA..." 
          onChange={(event) => {setExperience(event.target.value)}}
          required/>

        <label >Salary: </label>
        <input 
          type="text" 
          placeholder="4LPA, 10LPA..." 
          onChange={(event) => {setSalary(event.target.value)}}
          required/>

        <label >Current City: </label>
        <input 
          type="text" 
          placeholder="Delhi, Mumbai..." 
          onChange={(event) => {setCity(event.target.value)}}
          required/>
      
        <button className="submitButton" onClick={addJob}>Add Job</button>
      
    </div>
    
  )
}

export default Recruiter;
