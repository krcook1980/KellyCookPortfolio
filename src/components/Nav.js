import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="row nav mb-4">
            
                <div className="nav-item col-md-4">
                    <Link
                        to="/"
                        className="text-white">
                        Home
                    </Link>
                </div>
                <div className="nav-item col-md-4">
                    <Link
                        to="/About"
                        className="text-white">
                        About
                    </Link>
                </div>
                <div className="nav-item col-md-4">
                    <Link
                        to="/Portfolio"
                        className="text-white">
                        Portfolio
                    </Link>
                </div>
            
        </div>
    )
}
export default Navbar;