import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {Login} from './components';



const StyledApp = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:40px;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
}

`


class App extends Component {
  render() {
    return (
      <StyledApp>
        <Login/>
      </StyledApp>
    );
  }
}

export default App;
