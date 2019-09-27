import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './componenets/layout/Navbar'
import Dashboard from './componenets/dashboard/Dashboard';
import ProjectDetails from './componenets/projects/ProjectDetails';
import SignIn from './componenets/auth/SignIn';
import SignUp from './componenets/auth/SignUp';
import CreateProject from './componenets/projects/CreateProject';
import './App.css';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
