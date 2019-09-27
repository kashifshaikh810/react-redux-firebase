import React from 'react';
import ProjectSummray from './ProjectSummray';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return(
                    <ProjectSummray project={project} key={project.id} />
                )
            })}
    </div>
    )
}

export default ProjectList;