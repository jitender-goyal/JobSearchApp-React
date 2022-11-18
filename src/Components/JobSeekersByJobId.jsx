import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployerService from "../Service/EmployerService";
import EmployerMenu from "../Components/EmployerMenu";

const JobSeekerByJob = () => {
    const [jobSeekers, setJobSeeker] = useState([]);
    const {searchId} = useParams();

    useEffect(() => {
        EmployerService.getJobSeekerByJob(searchId).then(response => {
            setJobSeeker(response.data);
        }).catch(error => [
            alert("Error while fetching job info " + error)
        ]);
    }, []);

    

    return (
        <div>
            <EmployerMenu />
            <div className="d-flex justify-content-end">
                <h6>JobId:{}</h6>
            </div>
            <table className="table table-striped table-hover bg-info rounded">
                <thead className="table-gray text-danger">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {
                        jobSeekers.map(js => (
                            <tr>
                                <td>{js.jsId}</td>
                                <td>{js.jsName}</td>
                                <td>{js.jsEmail}</td>
                                <td>{js.jsContactNo}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default JobSeekerByJob;