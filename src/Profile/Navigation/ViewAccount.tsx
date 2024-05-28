// src/Profile/Navigation/ViewAccount.tsx
import React from 'react';

const ViewAccount = () => {
    return (
        <div>
            <h3>Account Information</h3>
            <div className="card p-3">
                <p><span>First Name: </span>Lemon</p>
                <p><span>Last Name: </span>Zhang</p>
                <p><span>Date of Birth: </span>01/01/2000</p>
                <p><span>Email: </span>lemon.zhang219@gmail.com</p>
                <p><span>User Name: </span>Lemon123</p>
                <p><span>Password:</span> *******</p>
            </div>
        </div>
    );
};

export default ViewAccount;
