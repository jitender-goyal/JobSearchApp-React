import { useContext, useState } from "react";

const EmployerTable = (props) => {
    const employers = props.employers;
    const searchStr = props.searchStr;
    return (
        <table className="table table-striped table-hover bg-info rounded">
            <thead className="table-gray text-danger">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {
                    employers.filter(emp => (emp.empName.toLowerCase().includes(searchStr.toLowerCase()) || emp.empId == searchStr || emp.empEmail.toString() == searchStr)).map(emp => (
                        <tr>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            
                            <td>{emp.empEmail}</td>
                            <td>{emp.empContactNo}</td>
                            <td>
                                <a className="btn btn-primary m-1" href={"/emp/editemployer/"+emp.empId}>Update</a>
                                <a className="btn btn-danger m-1" href={"/emp/deleteemployer/"+emp.empId}>Delete</a>
                                <a className="btn btn-success m-1" href={"/emp/viewemployer/"+emp.empId}>Show</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default EmployerTable;