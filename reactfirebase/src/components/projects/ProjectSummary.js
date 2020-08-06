import React from "react"

const ProjectSummary = ({project}) =>{
    return(
<div className="card z-depth-0 project-summary">
<div className="card-content grey-text text-darken-3"></div>
 <span className="card-title">{project.title}</span>
 <p>{project.content}</p>
 <p>posted by {project.authorFirstName} {project.authorSecondName}</p>
    <p className="grey-text">{project.createdAt.toDate().toString()}</p>
            </div> 
    )
}

export default ProjectSummary