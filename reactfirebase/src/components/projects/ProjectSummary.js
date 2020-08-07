import React from "react"
import moment from 'moment'

const ProjectSummary = ({project}) =>{
    return(
<div className="card z-depth-0 project-summary">
<div className="card-content grey-text text-darken-3"></div>
 <span className="card-title">{project.title}</span>
 {/* <p>{project.content}</p> */}
 <p>posted by {project.authorFirstName} {project.authorSecondName}</p>
    <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div> 
    )
}

export default ProjectSummary