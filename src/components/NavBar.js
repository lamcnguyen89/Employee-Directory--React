import React from "react";
import SearchBar from "./SearchBar";

function NavBar({}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <SearchBar />

                </div>
  
                <a className="navbar-brand" href="#">Navbar</a>

            </nav>
    );
}
export default NavBar;

