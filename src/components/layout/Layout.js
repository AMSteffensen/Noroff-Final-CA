import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import CardDetailContainer from "../cards/CardDetailContainer";
import Login from "../login/Login";




function Layout() {
  return (
    <Router>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <NavLink to='/home' exact>
          <Navbar.Brand>Magic the Gathering</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/home' exact className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/about/' className='nav-link'>
              About
            </NavLink>
            <NavLink to='/contact/' className='nav-link'>
              Contact
            </NavLink>
            <NavLink to='/login/' className='nav-link'>
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/card/:id' component={CardDetailContainer} />
          <Route path='/login' component={Login} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Layout;
