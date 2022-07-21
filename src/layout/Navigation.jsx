import logo from '../assets/logo_title.png';
import './styles/Navigation.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar expand='lg' className='navbar' collapseOnSelect>
      <Container>
        <Navbar.Brand className='navbar__logo'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto navbar__menu'>
            <Nav.Item>
              <Nav.Link eventKey='1' as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link eventKey='2' as={Link} to='/about'>
                About
              </Nav.Link>
              <Nav.Link eventKey='3' as={Link} to='/programs'>
                Programs
              </Nav.Link>
              <Nav.Link eventKey='4' as={Link} to='/schedule'>
                Schedule
              </Nav.Link>
              <Nav.Link eventKey='5' as={Link} to='/contact-us'>
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
