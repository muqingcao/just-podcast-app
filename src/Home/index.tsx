import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mt-4">
            <h1>Hi, I'm home page!</h1>

            <br /><br />
            <p>Please keep the ⬇️ buttons on the page for me for now (wherever you want) -muqing 💛</p>
            <div  className="d-flex"style={{ display: 'flex', justifyContent: 'left', gap: '10px' }}>
                <Link to="/showdetail">
                    <button className="btn btn-primary">Show detail</button>
                </Link>
                <Link to="/episodedetail">
                    <button className="btn btn-primary">Episode detail</button>
                </Link>
            </div> <br />  <br />
            <div id="sign-in" className="d-flex">
                <Link to="/LogIn/SignIn"> SIGN IN  </Link>
            </div>
            <div id="profile" className="d-flex">
                <Link to="/Profile/Profile"> Profile </Link>
            </div>


        </div>
    )
}