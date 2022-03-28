import './App.css';
import Sidebar from "./component/Sidebar"
import Main from "./component/Main"
import Auth from "./component/Auth/Auth"

import { Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { io } from "socket.io-client"
import { login } from "./Redux/Action/index"
import React, { useState, useEffect } from 'react';
import { dividerClasses } from '@mui/material';
import socketAPI from "./helps/socketAPI"

import { logout } from "./Redux/Action/index";
import { clearMessage } from "./Redux/Action/index"
import { history } from "./helps/history";

export function App({isLoggedIn, user}) {
  var currentUser;
  user ?  currentUser = user : currentUser = null; 
  
  return (
    <Router history={history}>
      <div className="app" >
      {!currentUser ? 
        <div className="appSkype">
          <Sidebar />
          <Main />
        </div> : 
        <Auth />}
      </div>      
    </Router>
    
  )  
  }
  


  const mapStateToProps = function mapStateToProps(state) {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      content: state.messages.content,
      user: state.auth.user,
    };
  };
 
  
  export default connect(mapStateToProps)(App);
