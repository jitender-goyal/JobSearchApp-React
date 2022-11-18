import { useState } from "react";
import photo from '../images/pp.jpg';

const JobsGrid = (props) => {
    const jobs = props.jobs;
    const searchStr = props.searchStr;
    return (
        <div className="row border rounded bg-warning pb-5">
        {
            jobs.map(j => (
                <div className="col col-lg-4 w-25 pt-5">
                    <div className="card">
                    <div className="card-header">
                    <h4>{j.organization}</h4>
                    </div>
                    <div className="card-body">
                    <div className="card-title">
                        <h4>Details</h4>
                    </div>
                    <div className="card-text">
                        <table>
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <th>Title:</th>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                        </tr>
                                        <tr>
                                            <th>Salary:</th>
                                        </tr>
                                        <tr>
                                            <th>Minimum Experience:</th>
                                        </tr>
                                        <tr>
                                            <th>Location:</th>
                                        </tr>
                                        <tr>
                                            <th>Notice Period:</th>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{j.title}</td>
                                        </tr>
                                        <tr>
                                            <td>{j.description}</td>
                                        </tr>
                                        <tr>
                                            <td>{j.salary}</td>
                                        </tr>
                                        <tr>
                                            <td>{j.minExperience}</td>
                                        </tr>
                                        <tr>
                                            <td>{j.location}</td>
                                        </tr>
                                        <tr>
                                            <td>{j.noticePeriod}</td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                    </table>
                    </div>
                    </div>
                    <div className="card-footer p-2">
                        <a className="btn btn-primary m-1" href={"/emp/updateJob/"+j.jobId}>Update</a>
                        <a className="btn btn-danger m-1" href={"/emp/deleteJob/"+j.jobId}>Delete</a>
                    </div>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
export default JobsGrid;