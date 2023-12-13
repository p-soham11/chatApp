/** @format */

import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img
                    src="https://images.unsplash.com/photo-1553484771-898ed465e931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNlbyUyMG9mJTIwYSUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D"
                    alt="Display Picture"
                />
                <span>UserName</span>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
