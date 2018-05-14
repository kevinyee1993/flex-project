import React from 'react';
import * as rb from 'react-bootstrap';
// var BrowserHistory = require('react-router/lib/BrowserHistory').default;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <rb.Navbar>
        <rb.Navbar.Header>
          <rb.Navbar.Brand>
              WhatDo
          </rb.Navbar.Brand>
          <rb.Navbar.Toggle />
        </rb.Navbar.Header>
      </rb.Navbar>
    );
  }
}

export default Header;
