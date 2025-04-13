import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="px-4 py-5 my-5 text-center">
                {/* Image from the public folder */}
                <img className="d-block mx-auto mb-4" src="/Assets/logo.png" alt="Syncify Logo" width="72" height="57" />
                
                <h1 className="display-5 fw-bold text-body-emphasis">Welcome to Syncify</h1>
                
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Syncify is your go-to platform for seamless real-time collaboration. 
                        Work together on documents, share ideas, and communicate effortlessly with your team.
                    </p>
                    <hr className="my-4" />
                    <p className="mb-4">
                        Whether you're working on a team project or just need to organize your thoughts, 
                        Syncify offers all the features you need to stay productive.
                    </p>
                    {/* Buttons for Register and Login */}
                    <div className="d-grid gap-4 d-sm-flex justify-content-sm-center">
                        <Link to="/register" className="btn btn-primary btn-lg px-4">Register</Link>
                        <Link to="/login" className="btn btn-danger btn-lg px-4">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
