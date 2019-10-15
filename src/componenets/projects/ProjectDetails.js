import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
    const { project, auth } = props;
        if(!auth.uid) return <Redirect to='/signin' />

    if (project) {
        return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> {project.title} </span>
                    <p> {project.Content} </p>
                </div>
                <hr />
                <br />    
                <div className="div-action.gret.lighten-4 grey-text">
                    <div> Posted by the {project && project.author && project.author.FirstName} {project && project.author && project.author.LastName}  </div>
                    <div> 2nd september, 2am </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="container center" >
                <p> loading project... </p>
            </div>
        )
    }
}

const mapStateToprops = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToprops),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);