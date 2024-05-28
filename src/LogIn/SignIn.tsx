import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const SignIn: React.FC = () => {

    return (
        <div id="wd-sign-in" className="container d-flex justify-content-center align-items-center vh-100">
            <form
                className="w-50"
                style={{ maxWidth: 600 }}
                autoComplete="off"
            >
                <div className="form-group row mb-3">
                    <label htmlFor="username" className="col-sm-4 col-form-label text-end">Username</label>
                    <div className="col-sm-8">
                        <div className="input-group w-55">
                            <span className="input-group-text bg-white border-end-0"><FaUser /></span>
                            <input
                                type="text"
                                className="form-control border-start-0"
                                id="username"
                                name="username"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="password" className="col-sm-4 col-form-label text-end">Password</label>
                    <div className="col-sm-8">
                        <div className="input-group w-55">
                            <span className="input-group-text bg-white border-end-0"><FaLock /></span>
                            <input
                                type="password"
                                className="form-control border-start-0"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <div className="col-sm-8 offset-sm-4">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember" name="remember" checked/>
                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                        </div>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <div className="col-sm-8 offset-sm-4">
                        <button type="submit" className="btn btn-dark w-100 rounded-0">Sign In</button>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <div className="col-sm-8 offset-sm-4 text-center">
                        <Link to="/LogIn/SignUp" className="text-dark">Create an Account</Link>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <div className="col-sm-8 offset-sm-4 text-center">
                        <Link to="/" className="text-dark">Return to Home Page</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
