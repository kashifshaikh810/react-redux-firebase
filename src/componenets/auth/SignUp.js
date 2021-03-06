import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';


class SignUp extends Component {
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : ''
    }

handelChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}

handelSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
}

    render(){
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/' />

        return(
            <div className="container"> 
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3" > Sign Up </h5>
                    <div className="input-feild">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={this.handelChange}/>
                    </div>

                    <div className="input-feild">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" onChange={this.handelChange}/>
                    </div>

                    <div className="input-feild">
                        <label htmlFor="firstName"> First Name </label>
                        <input type="text" id="firstName" onChange={this.handelChange}/>
                    </div>

                    <div className="input-feild">
                        <label htmlFor="lastName"> Last Name </label>
                        <input type="text" id="lastName" onChange={this.handelChange}/>
                    </div>

                    <div className="input-feild">
                        <button className="btn pink lighten-1 z-depth-0"> SIGN UP </button>
                        <div className="red-text center">
                            { authError ? <p> { authError } </p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatachToProps = (dispatach) => {
    return {
        signUp: (newUser) => dispatach(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatachToProps)(SignUp);
