import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {Login} from './components/Login';


const StyledApp = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:40px;


`


class App extends Component {
  render() {
    return (
      <StyledApp>
        <Login></Login>
      </StyledApp>
    );
  }
}

export default App;
