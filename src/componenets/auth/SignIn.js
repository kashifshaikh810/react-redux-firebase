import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email : '',
        password : '' 
    }

handelChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}

handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
}

    render(){
        return(
            <div className="container"> 
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3" > Sign In </h5>
                    <div className="input-feild">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={this.handelChange}/>
                    </div>

                    <div className="input-feild">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" onChange={this.handelChange}/>
                    </div>
                    <div className="input-feild">
                        <button className="btn pink lighten-1 z-depth-0"> Login </button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default SignIn;
