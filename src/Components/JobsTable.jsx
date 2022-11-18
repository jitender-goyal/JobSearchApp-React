import { useContext, useState } from "react";

const JobsTable = (props) => {
    const jobs = props.jobs;
    const searchStr = props.searchStr;
    return (
        <table className="table table-striped table-hover bg-info rounded">
            <thead className="table-gray text-danger">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Salary</th>
                    <th>Minimum Experience</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {
                    jobs.map(job => (
                        <tr>
                            <td>{job.title}</td>
                            <td>{job.description}</td>
                            <td>{job.salary}</td>
                            <td>{job.minexp}</td>
                            <td>{job.location}</td>
                            <td>{job.salary}</td>
                            <td>
                                <a className="btn btn-primary m-1" href={'/emp/updateJob/'+job.jobId}>Update</a>
                                <a className="btn btn-danger m-1" href={'/emp/deleteJob/'+job.jobId}>Delete</a>
                                <a className="btn btn-success m-1" href={'/emp/viewJob/'+job.jobId}>Show</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default JobsTable;