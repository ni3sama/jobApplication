import React from "react"
import { Link } from "react-router-dom";
import "./linkPages.css"


class LinkPages extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>I'm a</h1>
                <Link to="/recruiter"><button type="button" class="button1">Recruiter</button></Link>
                <Link to="/applicant"><button type="button" class="button1">Applicant</button></Link>
            </React.Fragment>
        )
    }
}

export default LinkPages