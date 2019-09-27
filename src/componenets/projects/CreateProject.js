import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title : '',
        Content : '' 
    }

handelChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}

handelSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.createProject(this.state)   
}

    render(){
        return(
            <div className="container"> 
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3" > Create New Project </h5>
                    <div className="input-feild">
                        <label htmlFor="title"> Title </label>
                        <input type="text" id="title" onChange={this.handelChange}/>
                    </div>

                    <div className="input-feild">
                        <label htmlFor="password"> Project Content </label>
                        <textarea id="Content" className="materialize-textarea"  onChange={this.handelChange}></textarea>
                    </div>
                    <div className="input-feild">
                        <button className="btn pink lighten-1 z-depth-0"> Create </button>
                    </div>  
                </form>
            </div>
        )
    }
}

const mapDispatachToProps = (dispatach) => {
    return {
        createProject: (project) => dispatach(createProject(project))
    }
}

export default connect(null, mapDispatachToProps)(CreateProject);