import React from 'react';
import * as rb from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <rb.Navbar>
        <rb.Navbar.Header>
          <rb.Navbar.Brand>
            flex-project
          </rb.Navbar.Brand>
        </rb.Navbar.Header>
        <rb.Nav pullRight>
          <rb.NavItem eventKey={1} href="#">
            MY ITINERARY
          </rb.NavItem>
        </rb.Nav>
      </rb.Navbar>
    );
  }
}

export default Header;
