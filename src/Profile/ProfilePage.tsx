import React from 'react';
import ProfileNavigation from './Navigation/ProfileNavigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import ViewAccount from './Navigation/ViewAccount';
import EditAccount from './Navigation/EditAccount';
import Likes from './Navigation/Likes';
import Collections from './Navigation/Collections';
import Referral from './Navigation/Referral';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
    const username = "Lemon123"; // Replace this with the actual username from your auth system

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                {/* Sidebar */}
                <div className="col-md-3 bg-white border-end border-dark">
                    <ProfileNavigation username={username} />
                </div>
                {/* Main Content */}
                <div className="col-md-9">
                    <div className="p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="view-account" />} />
                            <Route path="view-account" element={<ViewAccount />} />
                            <Route path="edit-account" element={<EditAccount />} />
                            <Route path="likes" element={<Likes />} />
                            <Route path="collections" element={<Collections />} />
                            <Route path="referral" element={<Referral />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
