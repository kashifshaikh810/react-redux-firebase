import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Project Title - {id} </span>
                    <p> We present here the results of a study focused on text reading in a car. The purpose of this work is to explore how machine synthesized reading is perceived by users. Are the users willing to tolerate deficiencies of machine synthesized speech and trade it off for more current content? </p>
                </div>
                <hr />
                <br />
                <div className="div-action.gret.lighten-4 grey-text">
                    <div> Posted by the Kashif Sheikh </div>
                    <div> 2nd september, 2am </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;