import React from "react";


function Employee(props) {
    return (
        <div className="container">
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">photo</th>
                                    <td>Firstname Lastname</td>
                                    <td>###-###-####</td>
                                    <td>email@email.com</td>
                                </tr>
                            </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee;