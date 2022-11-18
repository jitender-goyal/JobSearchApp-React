import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Components/Menu";
import JobService from "../Service/JobService";
import JobsMenu from "./JobsMenu";

const WithdrawApplication = () => {
    const {id,jid} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        JobService.withdrawApplication(id,jid).then(response => {
            if(response.status === 204){
                setMessage( "Application Withdrawn sucessfully");
            }
        }).catch(e => console.log("Exception while withdrawing from job"))
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

export default WithdrawApplication;