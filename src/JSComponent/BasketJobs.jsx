import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobService from "../Service/JobService";
import JobsMenu from "../JSComponent/JobsMenu";
// import { Alert } from "react-alert";


const BasketJobs = () => {
    const {id} = useParams();
   const [jobs, setJobs] = useState([]);
    // const [deleteClicked, setDeleteClicked] = useState(false);
    
    const [searchStr, setSearchStr] = useState("");
   
    useEffect(() => {
        JobService.getBasket(id).then(response => {
            //console.log(response);
            setJobs(response.data);
        }).catch( error => [
             alert("Error while fetching job info "+error)
         ])
    },[]);
    


    const search = (event) => {
        setSearchStr(event.target.value);
    }


    return (
        <div className="container">
            <JobsMenu name="Home"/>            
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} />       
                </div>
                <table className="table table-striped table-bordered table-hover bg-info">
                    <thead className="table-gray text-danger">
                        <tr>
                            <th> Job Id</th>
                            <th>Job Title</th>
                            <th>Job Location</th>
                            <th>Description</th>
                            <th>Salary</th>
                            
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                           jobs.filter(job => (job.title.toLowerCase().includes(searchStr.toLowerCase()) || job.jobId == searchStr || job.description == searchStr )).map(job => (
                                <tr>
                                    <td>{job.jobId}</td>
                                    <td>{job.title}</td>
                                    <td>{job.location}</td>
                                    <td>{job.description}</td>
                                    <td>{job.salary }</td>
                                    
                                     



                                    <td>
                                        <a className="btn btn-primary m-1" href={'/js/apply/'+localStorage.getItem("jsId")+'/'+job.jobId}>Apply</a>
                                        <a className="btn btn-danger m-1" href={'/js/deletebasket/'+localStorage.getItem("jsId")+'/'+job.jobId}>Remove from Basket</a>
                                        <a className="btn btn-warning m-1" href={'/js/jobdata/'+job.jobId}>Job Details</a>
                                        {/* <a className="btn btn-danger m-1" href={"/deleteEmployee/"+emp.id}>Delete</a>
                                        <a className="btn btn-success m-1" href={employeeUrl+emp.id}>Show</a></td> */}
                                        </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BasketJobs;