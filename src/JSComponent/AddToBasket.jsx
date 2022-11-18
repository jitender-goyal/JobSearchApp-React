import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobService from "../Service/JobService";
import JobsMenu from "./JobsMenu";

const AddToBasket = () => {
    const {id,jid} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        JobService.addtoBasket(id,jid).then(response => {
            if(response.status === 201){
                console.log("Added job to basket :: "+jid+" by UserId :: "+id);
                setMessage( "Added job to basket :: "+jid+" by UserId :: "+id);
            }
        }).catch(e => console.log("Exception while applying to job"))
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

export default AddToBasket;