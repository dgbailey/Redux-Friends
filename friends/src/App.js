import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ItemList from './components/ItemList';
import {DashboardVue} from './components/DashboardView';



const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  width:100%;
  height:100%;

  
  
  
  font-family: 'Roboto', sans-serif;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .gen-login-container{
    margin-top: 40px;
    
  }

  .complete-dashboard-container{
    height:100%;
}
}

`


class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path='/' component={Login}/>
          <PrivateRoute exact path='/protected' component={DashboardVue}/>
        </StyledApp>
        
      </Router>
    );
  }
}

export default App;
