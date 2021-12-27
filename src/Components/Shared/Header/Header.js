import { Button } from '@mui/material';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Bicycle Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} className="" to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="" to="/explore">Explore</Nav.Link>
                            <Nav.Link as={HashLink} className="" to={`/dashboard/dashboard`}>Dashboard</Nav.Link>
                            {user.displayName && <Nav.Link className=''>{user.displayName}</Nav.Link>}


                            {user.photoURL && <img className='profile-pic' src={user.photoURL} alt="dd" />}

                            {user.email ? <Button className='logOut-btn' variant='outlined' color="error" onClick={logOut}>Log out</Button> : <Nav.Link as={HashLink} className="" to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;