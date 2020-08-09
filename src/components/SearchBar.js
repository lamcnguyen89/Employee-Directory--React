import React from "react";

// This compnonent is purely a search bar created from a bootstrap template.
// Source for Code: https://mdbootstrap.com/docs/jquery/forms/search/

function SearchBar({}) {
    return(
        <div className="searchComponent">
                <form className="form-inline mr-auto">
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Search by Name" 
                        aria-label="Search by Name"
                    />
                    <button className="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit">
                        Search 
                    </button>
                </form>
            </div>
    );
}

export default SearchBar;