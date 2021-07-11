import React from 'react';
import {useState} from "react"
import Axios from "axios"
import './Applicant.css'


function Applicant() {
  
  

  const [jobList, setJobList] = useState([])

  //check
  
const getJob = () => {
  Axios.get('https://job-data.herokuapp.com/job').then((response)=> {
      setJobList(response.data)
    })
}
  return (
    <div className="formContainer">
    <p>Disclaimer: This definitely works, if you see no data here, that means I am out of query request or reached the limit of the database plan, since this is a free hosted server. Wait 1 hour or ask me to reset the server.</p>
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
