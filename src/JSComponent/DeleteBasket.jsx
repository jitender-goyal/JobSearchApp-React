import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Components/Menu";
import JobService from "../Service/JobService";
import JobsMenu from "./JobsMenu";

const DeleteBasket = () => {
    const {id,jid} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        JobService.deleteBasket(id,jid).then(response => {
            if(response.status === 204){
                setMessage( "Job Removed from basket");
            }
        }).catch(e => console.log("Exception while removing the job basket"))
    },[]);

    return (
        <div>
            <div className='conatiner'> 
                <JobsMenu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href={'/js/getbasket/'+{id}}>Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteBasket;