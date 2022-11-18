import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobService from "../Service/JobService";
import JobsMenu from "../JSComponent/JobsMenu";
// import { Alert } from "react-alert";


const AppliedJobs = () => {
    const {id} = useParams();
   const [jobs, setJobs] = useState([]);
  // const[status, setStatus]=useState([]);
    // const [deleteClicked, setDeleteClicked] = useState(false);
    
    const [searchStr, setSearchStr] = useState("");
    
 

    // const initialOptions = [ 
    //     {label:'Withdraw Application', color:'btn btn-danger m-1', path:'/withdrawapplication/'+localStorage.getItem("jsId")+'/'+job.jobId},  
    //     ];


    // const [options, setOptions] = useState(initialOptions);
    
   
    useEffect(() => {
        JobService.getAppliedJobs(id).then(response => {
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
                                    
                                        {/* {
                                            JobService.getApplicationStatus(id,job.jobId).then(response=>{
                                                status=response.data;
                
                                            })
                                        } */}
                                    
                                    
                                    
                                                                
                                    
                                    <td>
                                        {/* <a className="btn btn-danger m-1" href={"/withdrawappliaction"+localStorage.getItem("jsId") +"/"+ job.jobId}>Withdraw Application</a> */}
                                        {
                                        // options.map( option => (
                                        // <a href={option.path} className={option.color}>{option.label}</a>
                                        //  ))

                                            // { label:'Withdraw Application', color:'btn btn-danger m-1', path:'/withdrawapplication/'+localStorage.getItem("jsId")+'/'+job.jobId  }
                                      
                                            <a href={'/js/withdrawapplication/'+localStorage.getItem("jsId")+'/'+job.jobId} className="btn btn-danger m-1">Withdraw Application</a>
                                                
                                         }
                                        
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

export default AppliedJobs;