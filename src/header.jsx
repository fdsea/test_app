import React from 'react';
import {Navbar,MenuItem, NavDropdown, Nav, NavItem, PageHeader, Grid, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from './store';

class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
    		 <Navbar>
    			<Navbar.Header>
      			<Navbar.Brand>
      			</Navbar.Brand>
      			<Navbar.Toggle />
   				</Navbar.Header>
              <Navbar.Collapse>
                <Nav> 
                  <li key={0}><Link to = "/user">User</Link></li>
                  <li key={1}><Link to = "/admin">Admin</Link></li>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
		</div>
		);
	}
}
export default Header;