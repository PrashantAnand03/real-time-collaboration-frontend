import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    const [showDropdown, setShowDropdown] = useState(false);

    const profilePic = user?.profilePicture || "/Assets/hero.jpg";

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <Navbar expand="lg" className="bg-dark text-dark">
           <Container className="navbar-custom">
    <Navbar.Brand 
        className="brand text-white me-auto" 
        style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px', padding: "1px 8px" }}
    >
        SYNCIFY
    </Navbar.Brand>

    {/* Centering the Navbar Toggle and Nav Links */}
    <div className="d-flex flex-grow-1 justify-content-center">
        <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
    </div>

    <Navbar.Collapse id="navbar-nav" className="justify-content-center">
        <Nav className="navbar-links">
            <Nav.Link as={Link} to="/" className="nav-hov mx-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="nav-hov mx-4">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/live" className="nav-hov mx-4">Live Chat</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-hov mx-4">About</Nav.Link>
        </Nav>
    </Navbar.Collapse>
                <Navbar.Collapse className="navbar-right">
                    <Nav>
                        {user ? (
                            <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
                                <Dropdown.Toggle as="div" className="user-section d-flex align-items-center" style={{ cursor: 'pointer' }}>
                                    <div className="user-avatar" style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        marginRight: '10px',
                                        backgroundColor: '#f0f0f0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img src={profilePic} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item as={Link} to="/account">Account</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    <Button variant="outline-success" className="Login-button text-white">Login</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    <Button variant="outline-primary" className="Register-button text-white">Register</Button>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
