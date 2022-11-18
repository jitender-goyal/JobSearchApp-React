import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import JobService from "../Service/JobService";
import JobsMenu from "../JSComponent/JobsMenu";
 

const JobData=()=>
{
    const {id}=useParams();
    const [job,setJob]=useState({});
    const [emp,setEmp]=useState({});

    useEffect(() => {
        JobService.getJob(id).then(response => {
            //console.log(response);
             setJob(response.data);
             JobService.getEmployer(response.data.employerId).then(response=>{
                setEmp(response.data);
             })
        }).catch( error => [
             alert("Error while fetching job info "+error)        
         ])
         
    },[]);
    const initialOptions = [ 
        {label:'Apply', color:'btn btn-success m-1', path:'/js/apply/'+localStorage.getItem("jsId")+'/'+id},  
        {label:'Add to Basket', color:'btn btn-warning m-1', path:'/js/addtobasket/'+localStorage.getItem("jsId")+'/'+id},
        {label:'Employer Profile', color:'btn btn-success m-1', path:'/js/employerprofile/'+id},  
 ];

    const [options, setOptions] = useState(initialOptions);


    // { JobService.getEmployer(job.employerId).then(response=>{
    //     setEmp(response.data);

    // })}

   
    return(
        <div className="container">
        <JobsMenu name="Home" />            
        <div className="container pt-5 ">
            {/* <div className="d-flex justify-content-end">
                <input type="text" className="form-control rounded w-25 mb-2" />       
            </div> */}
            <table className="table table-striped table-bordered table-hover bg-secondary">
                    <thead className="table-gray text-white">
                        <tr>
                            <td>JobId</td>
                            <td>{job.jobId}</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>{job.title}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{job.location}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{job.description}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>{job.salary}</td>
                        </tr>
                        <tr>
                            <td>Minimum Experience</td>
                            <td>{job.minExperience}+ Years</td>
                        </tr>
                        <tr>
                            <td>Notice Period</td>
                            <td>{job.noticePeriod}+ Days</td>
                        </tr>
                        <tr>
                            <td>Employer Details</td>
                            <td>{emp.empName}</td>
                        </tr>
                        
                        </thead>
                        </table>

                 </div>

                 <div>
                    {
                        options.map( option => (
                            <a href={option.path} className={option.color}>{option.label}</a>
                        ))
                     
                    }  
                 </div>
             </div>

    );
}

export default JobData
