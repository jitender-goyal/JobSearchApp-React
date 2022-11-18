
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Components/Menu";
import JobService from "../Service/JobService";
import JobsMenu from "./JobsMenu";

const DeleteProfile = () => {
    const {id} = useParams();
    const [message, setMessage] = useState();
    const check=useRef(false);

    useEffect(() => {
        
        if(check.current) return;
        check.current=true;
                    JobService.deleteProfile(id).then(response => {
                        if(response.status === 204){
                            setMessage("You have Deleted Your Profile");
                        }
            }).catch(e => console.log("Exception while Deleting Profile"))
},[]);

    return (
        <div>
            <div className='conatiner'> 
                <JobsMenu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="danger">{message}</p><br></br>
                <a className="btn btn-success"href="/">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteProfile;