import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaEdit, FaThumbsUp, FaStar, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import './ProfileNavigation.css'; // Import the CSS file for custom styles

type ProfileNavigationProps = {
    username: string;
};

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ username }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate(); // Use the useNavigate hook to navigate

    const links = [
        { label: "View Account Information", path: "/profile/view-account", icon: FaUser },
        { label: "Edit Account Information", path: "/profile/edit-account", icon: FaEdit },
        { label: "Likes", path: "/profile/likes", icon: FaThumbsUp },
        { label: "Collections", path: "/profile/collections", icon: FaStar },
        { label: "Refer to a Friend", path: "/profile/referral", icon: FaUsers },
    ];

    const sections = {
        "My Podcasts": links.slice(2, 4),
        "My Account": links.slice(0, 2),
        "My Referrals": links.slice(4)
    };

    const handleSignOut = () => {
        // Perform sign-out logic here (e.g., clearing authentication tokens)
        navigate('/'); // Navigate to the homepage
    };

    return (
        <div className="d-flex flex-column p-3">
            <div className="d-flex align-items-center mb-3">
                <FaUser className="me-2 fs-3" />
                <h5 className="m-0">{username}</h5>
            </div>
            <button onClick={handleSignOut} className="btn btn-outline-dark mb-4 d-flex align-items-center">
                <FaSignOutAlt className="me-2" /> Sign Out
            </button>
            <ul className="nav nav-pills flex-column mb-auto">
                {Object.entries(sections).map(([section, items]) => (
                    <li key={section} className="nav-item mb-3">
                        <h3>{section}</h3>
                        <ul className="nav flex-column ms-3">
                            {items.map(link => (
                                <li key={link.path} className="nav-item">
                                    <Link to={link.path} className={`nav-link d-flex align-items-center text-black ${pathname.includes(link.path) ? 'custom-active' : ''}`}>
                                        <link.icon className="me-2" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileNavigation;
