import { useContext, useState } from "react";

const JobseekerTable = (props) => {
    const jobseekers = props.jobseekers;
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
                    jobseekers.filter(js => (js.jsName.toLowerCase().includes(searchStr.toLowerCase()) || js.jsId == searchStr || js.jsEmail.toString() == searchStr)).map(js => (
                        <tr>
                            <td>{js.jsId}</td>
                            <td>{js.jsName}</td>
                            <td>{js.jsEmail}</td>
                            <td>{js.jsContactNo}</td>
                            <td>
                                <a className="btn btn-primary m-1" href={"/emp/editjobseeker/"+js.jsId}>Update</a>
                                <a className="btn btn-danger m-1" href={"/emp/deletejobseeker/"+js.jsId}>Delete</a>
                                <a className="btn btn-success m-1" href={"/emp/viewjobseeker/"+js.jsId}>Show</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default JobseekerTable;