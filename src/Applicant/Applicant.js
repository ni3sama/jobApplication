import React from 'react';
import {useState} from "react"
import Axios from "axios"
import './Applicant.css'


function Applicant() {
  
  

  const [jobList, setJobList] = useState([])

  
  
const getJob = () => {
  Axios.get('https://job-data.herokuapp.com/job').then((response)=> {
      setJobList(response.data)
    })
}
  return (
    <div className="formContainer">
        <div className="jobList">
        <h1>Available Jobs!</h1>
         {getJob()}
        {jobList.map((val, key) => {
            return (
              <div className="jobItem">
                
                <ul>
                  <li><i class="fas fa-briefcase"></i> Job: {val.jobTitle}</li>
                  <li><i class="fas fa-book"></i> Skill: {val.skillsRequired}</li>
                  <li><i class="fab fa-wpexplorer"></i> Experience: {val.experience}</li>
                  <li> <i class="fas fa-rupee-sign"></i> Salary: {val.salary}</li>
                  <li> <i class="fas fa-map-marked-alt"></i> City: {val.city}</li>
                </ul>
               
                <button className="applyButton">Apply</button>
                </div>
            )})
          }
        </div>
    </div>
    
  )
}

export default Applicant;
