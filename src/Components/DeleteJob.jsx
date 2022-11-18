import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import EmployerService from "../Service/EmployerService";
import EmployerMenu from "./EmployerMenu";


const DeleteJob = () => {
    const {jobId} = useParams();
    //const {empId} = useParams();

    const [message, setMessage] = useState();

    useEffect(() => {
        EmployerService.deleteJob(localStorage.getItem("empId"),jobId).then(response => {
            if(response.status === 204){
                console.log("Deleted Job Successfully. Job ID :: "+jobId);
                setMessage("Deleted Job Successfully. Job Id::"+jobId);
            }
        }).catch(e => console.log("Exception while deleting job. Job Id:: "+jobId))
    },[]);

    return (
        <div>
            <div className='container'> 
                <EmployerMenu name="EmployerHome"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/emp/viewjobs">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteJob;