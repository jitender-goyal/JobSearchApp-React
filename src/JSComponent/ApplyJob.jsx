import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Components/Menu";
import JobService from "../Service/JobService";
import JobsMenu from "./JobsMenu";

const ApplyJob = () => {
    const {id,jid} = useParams();
    const [message, setMessage] = useState();
    const [jobs, setJobs] = useState([]);
    const check=useRef(false);

    useEffect(() => {
        if(check.current) return;
        check.current=true;
        
                    JobService.applyJob(id,jid).then(response => {
                        if(response.status === 201){
                            setMessage( "Applied to Job :: "+jid+" by UserId :: "+id);
                        }
                        else if(response.status === 208 || response.status === 500){
                           setMessage( "You have already applied");
                        }
                    
            }).catch(e => console.log("Exception while fetching job"))
},[]);

    return (
        <div>
            <div className='conatiner'> 
                <JobsMenu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/js/jobs">Go Back</a>
            </div>
        </div>    
    )
}

export default ApplyJob;