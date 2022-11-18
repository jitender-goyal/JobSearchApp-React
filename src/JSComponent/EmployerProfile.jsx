import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import JobService from "../Service/JobService";
import JobsMenu from "../JSComponent/JobsMenu";
 

const EmployerProfile=()=>
{
    const {id}=useParams();
    // const [emp,setemp]=useState({});
    const [job,setJob]=useState({});
    const [emp,setEmp]=useState({});
   
    // useEffect(() => {
    //     JobService.getEmployer(id).then(response => {
    //         //console.log(response);
    //          setemp(response.data);
    //     }).catch( error => [
    //          alert("Error while fetching Employer Profile"+error)        
    //      ])
         
    // },[]);
    
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
                            <td>Employer Id</td>
                            <td>{emp.empId}</td>
                        </tr>
                        <tr>
                            <td>Employer Name</td>
                            <td>{emp.empName}</td>
                        </tr>
                        <tr>
                            <td>Employer Contact No.</td>
                            <td>{emp.empContactNo}</td>
                        </tr>
                        <tr>
                            <td>Employer Email</td>
                            <td>{emp.empEmail}</td>
                        </tr>
                        <tr>
                            <td>Employer Address</td>
                            <td>{emp.area} <br/>
                                {emp.district} <br/>
                                {emp.state} <br/>
                                {emp.pincode} <br/>
                            </td>
                        </tr>
                        
                        </thead>
                        </table>

                 </div>

                 
             </div>

    );
}

export default EmployerProfile;
