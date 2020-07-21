import React from 'react';

function SearchBar() {
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Employee Search"></input>
            </div>
        </div>
        </div>
    )
}

export default SearchBar
