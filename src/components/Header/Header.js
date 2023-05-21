import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="white" sticky='top' className='shadow-lg'>
            <Container>
                <Navbar.Brand className='text-dark fw-bold mr-3' as={Link} to="/">PERFUMANIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavLink to='/home' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Home</NavLink>
                        <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Blogs</NavLink>
                    </Nav>
                    <Nav className='ms-auto'>

                        {user && <>
                            <NavLink to='/myitems' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >My Items</NavLink>

                            <NavLink to='/additem' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Add Item</NavLink>

                            <NavLink to='/manageitems' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Manage Items</NavLink>

                        </>}
                        {user ? <button onClick={handleSignOut} className='btn btn-info rounded-pill py-0'>Sign Out</button> : <NavLink to='/login' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Login</NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;