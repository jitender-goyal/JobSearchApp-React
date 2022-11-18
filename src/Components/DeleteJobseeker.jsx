import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdminJobseekerService from "../Service/AdminJobseekerService";
import Menu from "./Menu";



const DeleteJobseeker = () => {
    const {jsId} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminJobseekerService.deleteJobseeker(jsId).then(response => {
            if(response.status === 204){
                console.log("Deleted Jobseeker Successfully. Jobseeker ID :: "+jsId);
                setMessage("Deleted Jobseeeker Successfully. Jobseeker Id::"+jsId);
            }
        }).catch(e => console.log("Exception while deleting jobseeker. Jobseeker Id:: "+jsId))
    },[]);

    return (
        <div>
            <div className='container'> 
                <Menu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/emp/viewjobseekers">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteJobseeker;