import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

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
    this.props.history.push('/');
}

    render(){
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatachToProps = (dispatach) => {
    return {
        createProject: (project) => dispatach(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatachToProps)(CreateProject);