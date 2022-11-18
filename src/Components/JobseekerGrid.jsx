import { useState } from "react";
import photo from '../images/pp.jpg';

const JobseekerGrid = (props) => {
    const jobseekers = props.jobseekers;
    const searchStr = props.searchStr;
    return (
        <div className="row border rounded bg-warning pb-5">
        {
            jobseekers.filter(js => (js.jsName.toLowerCase().includes(searchStr.toLowerCase()) || js.jsId == searchStr || js.jsEmail.toString() == searchStr )).map(jobseeker => (
                <div className="col col-lg-4 w-25 pt-5">
                    <div className="card">
                    <div className="card-header">
                    <h4>{jobseekers.empName}</h4>
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
                                            <td>{jobseeker.jsId}</td>
                                        </tr>
                                        <tr>
                                            <td>{jobseeker.jsName}</td>
                                        </tr>
                                        <tr>
                                            <td>{jobseeker.jsEmail}</td>
                                        </tr>
                                        <tr>
                                            <td>{jobseeker.jsContactNo}</td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                    </table>
                    </div>
                    </div>
                    <div className="card-footer p-2">
                        <a className="btn btn-primary m-1" href={"/emp/editjobseeker/"+jobseeker.jsId}>Update</a>
                        <a className="btn btn-danger m-1" href={"/emp/deletejobseeker/"+jobseeker.jsId}>Delete</a>
                    </div>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
export default JobseekerGrid;