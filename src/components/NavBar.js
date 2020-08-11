import React from "react";
import SearchBar from "./SearchBar";

function NavBar({searchEmployees}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBar searchEmployees={searchEmployees} />
                </div>
        </nav>
    );
}
export default NavBar;

