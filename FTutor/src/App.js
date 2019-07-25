import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';

import StudentSignIn from './Component/StudentSignIn';
import StudentSignUp from  './Component/StudentSignUp';
import TeacherSignIn from './Component/TeacherSignIn';
import TeacherSignUp from  './Component/TeacherSignUp';

import TeacherForm from './Component/TeacherForm';
import StudentForm from './Component/StudentForm';
import {PrivateRoute} from './Component/PrivateRoute';
import TeacherDashboard from './Component/TeacherDashboard';
import StudentDashboard from './Component/StudentDashboard';

// import {PrivateRoute} from './Component/PrivateRoute';

import Dashboard from './Component/Dashboard';
import Slider from './Component/Slider';
import FrontPage from './Component/FrontPage';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NotFound from './Component/NotFound';
import Check from './Component/check';

import {Provider} from 'react-redux';
import store from './Redux/Store/store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        status:false
    }
   
}

  render() {
    const {Auth }= this.props;
    return (
      <Provider store = { store } >
      
      <BrowserRouter>
      <div>
        
        <Header /> 
        <Slider/>
        <Switch>
          
          <Route exact path='/' component={FrontPage} />
          {/* <Route  path='/dashboard' component={Dashboard} />    */}
          <Route  path='/StudentSignIn' component={StudentSignIn} />
          <Route  path='/StudentSignUp' component={StudentSignUp} />
          <Route  path='/TeacherSignIn' component={TeacherSignIn} />
          <Route  path='/TeacherSignUp' component={TeacherSignUp} />
          <Route  path='/Slider' component={Slider} />
          <Route  path='/TeacherForm' component={TeacherForm} />
          <Route  path='/StudentForm' component={StudentForm} />
          <Route  path='/TeacherDashboard' component={TeacherDashboard} />
          <Route  path='/StudentDashboard' component={StudentDashboard} />
        
{/* <PrivateRoute path='/TeacherForm' Component={TeacherForm} Auth={false} /> */}
<PrivateRoute path='/dashboard' Component={Dashboard} Auth={true} /> 

          {/* <Route  component={NotFound}/> */}
          <Route  component={NotFound} />
         
        </Switch>
        
        <Footer />
    
      </div>
    </BrowserRouter>
    </Provider>
    )
  }
}
export default App;
