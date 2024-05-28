import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <form className="w-50">
            <div className="row text-center mb-0">
                <div className="col-3 text-right">
                    <img 
                        id="wd-logo" 
                        src="/images/Logo.png" 
                        alt="Just Podcast Logo" 
                        style={{ maxWidth: '120%', marginRight: '20px' }} 
                    />
                </div>
                <div className="col-9 text-left align-self-center">
                    <p className="text-black text-left">
                        Welcome to Just Podcast! We are thrilled to have you on board. <br />
                        Get ready to discover and enjoy podcasts tailored for you!
                    </p>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="role" className="col-sm-4 col-form-label text-end">Select a role</label>
                <div className="col-sm-8">
                    <div className="form-check form-check-inline ml-3">
                        <input className="form-check-input" type="radio" name="role" id="listener" value="Listener" required />
                        <label className="form-check-label" htmlFor="listener">Listener</label>
                    </div>
                    <div className="form-check form-check-inline ml-3">
                        <input className="form-check-input" type="radio" name="role" id="host" value="Host" />
                        <label className="form-check-label" htmlFor="host">Host</label>
                    </div>
                    <div className="form-check form-check-inline ml-3">
                        <input className="form-check-input" type="radio" name="role" id="admin" value="Admin" />
                        <label className="form-check-label" htmlFor="admin">Admin</label>
                    </div>
                </div>
            </div>

            <div className="form-group row mb-2">
                <label htmlFor="firstName" className="col-sm-4 col-form-label text-end">First Name</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="firstName" name="firstName" required />
                </div>
            </div>

            <div className="form-group row mb-2">
                <label htmlFor="lastName" className="col-sm-4 col-form-label text-end">Last Name</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="lastName" name="lastName" required />
                </div>
            </div>

            <div className="form-group row mb-2">
                <label htmlFor="dateOfBirth" className="col-sm-4 col-form-label text-end">Date of Birth</label>
                <div className="col-sm-8">
                    <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" required />
                </div>
            </div>

            <div className="form-group row mb-2">
                <label htmlFor="email" className="col-sm-4 col-form-label text-end">Email Address</label>
                <div className="col-sm-8">
                    <input type="email" className="form-control" id="email" name="email" required />
                </div>
            </div>

            <div className="form-group row mb-2">
                <label htmlFor="username" className="col-sm-4 col-form-label text-end">Username</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="username" name="username" required />
                </div>
            </div>

            <div className="form-group row mb-2">
                <label htmlFor="password" className="col-sm-4 col-form-label text-end">Password</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="password" name="password" required />
                </div>
            </div>

            <div className="form-group row mb-4">
                <label htmlFor="confirmPassword" className="col-sm-4 col-form-label text-end">Confirm Password</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                </div>
            </div>

            <div className="form-group row mt-2">
                <div className="col-sm-8 offset-sm-4">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="terms" name="terms" required />
                        <label className="form-check-label" htmlFor="terms">
                            I agree to the <Link to="/LogIn/UserAgreement" className="text-dark">All Just Podcast Terms and Conditions</Link>
                        </label>
                    </div>
                    <div className="form-check mt-3">
                        <button type="submit" className="btn btn-dark w-100 rounded-0 mt-2">Sign Up</button>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <Link to="/LogIn/SignIn" className="text-dark mt-2">Already have an account? Sign In</Link>
                    </div>
                </div>
            </div>
        </form>
    </div>
);

export default SignUp;
