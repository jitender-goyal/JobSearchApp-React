import { useState } from "react";
import photo from '../images/pp.jpg';

const EmployerGrid = (props) => {
    const employers = props.employers;
    const searchStr = props.searchStr;
    return (
        <div className="row border rounded bg-warning pb-5">
        {
            employers.filter(emp => (emp.empName.toLowerCase().includes(searchStr.toLowerCase()) || emp.empId == searchStr || emp.empEmail.toString() == searchStr )).map(employer => (
                <div className="col col-lg-4 w-25 pt-5">
                    <div className="card">
                    <div className="card-header">
                    <h4>{employer.empName}</h4>
                    </div>
                    <div className="card-body">
                    <img src={photo} alt="photo" className="card-img-top rounded-circle border border-warning employee-photo" />
                    <div className="card-title">
                        <h4>Details</h4>
                    </div>
                    <div className="card-text">
                        <table>
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <th>ID:</th>
                                        </tr>
                                        <tr>
                                            <th>NAME:</th>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                        </tr>
                                        <tr>
                                            <th>Phone:</th>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{employer.empId}</td>
                                        </tr>
                                        <tr>
                                            <td>{employer.empName}</td>
                                        </tr>
                                        <tr>
                                            <td>{employer.empEmail}</td>
                                        </tr>
                                        <tr>
                                            <td>{employer.empContactNo}</td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                    </table>
                    </div>
                    </div>
                    <div className="card-footer p-2">
                        <a className="btn btn-primary m-1" href={"/emp/editemployer/"+employer.empId}>Update</a>
                        <a className="btn btn-danger m-1" href={"/emp/deleteemployer/"+employer.empId}>Delete</a>
                    </div>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
export default EmployerGrid;