import React from "react";

function Employee(props) {
    return (
        <div className="container-fluid">
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="d-flex">
                            <th className="col-sm-3">Employee</th>
                            <th className="col-sm-3"><span onClick={props.sortUsers}>Name</span></th>
                            <th className="col-sm-3">Phone</th>
                            <th className="col-sm-3">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map(({ login, name, picture, email, phone }) => {
                            return (
                            <tr className="d-flex" key={login.uuid}>
                                <th className="col-sm-3"><img src={picture.large} alt="employee" /></th>
                                <td className="col-sm-3">{name.first} {name.last}</td>
                                <td className="col-sm-3">{phone}</td>
                                <td className="col-sm-3">{email}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee;