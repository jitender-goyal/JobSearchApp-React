import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdminEmployerService from "../Service/AdminEmployerService";
import Menu from "./Menu";


const DeleteEmployer = () => {
    const {empId} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminEmployerService.deleteEmployer(empId).then(response => {
            if(response.status === 204){
                console.log("Deleted Employer Successfully. Employer ID :: "+empId);
                setMessage("Deleted Employer Successfully. Employer Id::"+empId);
            }
        }).catch(e => console.log("Exception while deleting employer. Employer Id:: "+empId))
    },[]);

    return (
        <div>
            <div className='container'> 
                <Menu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/emp/viewemployers">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteEmployer;