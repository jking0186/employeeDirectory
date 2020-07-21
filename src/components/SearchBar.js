import React from 'react';

function SearchBar() {
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-2">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search"></input>
            </div>
        </div>
        </div>
    )
}

export default SearchBar
