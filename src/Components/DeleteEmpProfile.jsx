import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdminEmployerService from "../Service/AdminEmployerService";
import EmployerMenu from "./EmployerMenu";

const DeleteEmpProfile = () => {
    const {empId} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminEmployerService.deleteEmployer(empId).then(response => {
            if(response.status === 204){
                console.log("Deleted Profile Successfully." );
                setMessage("Deleted Profile Successfully." );
            }
        }).catch(e => console.log("Exception while deleting employer. Employer Id:: "+empId))
    },[]);

    return (
        <div>
            <div className='container'> 
                <EmployerMenu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/emp/logout">Back</a>
            </div>
        </div>    
    )
}

export default DeleteEmpProfile;