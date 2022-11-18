import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import JobService from "../Service/JobService";
import JobsMenu from "../JSComponent/JobsMenu";
 

const JSProfile=()=>
{
    const {id}=useParams();
    const [js,setJs]=useState({});
    const initialOptions = [ 
        {label:'Update Profile', color:'btn btn-success m-1', path:'/js/updateseeker/'+id},
        {label:'Delete Profile', color:'btn btn-danger m-1', path:'/js/deleteprofile/'+id},    
 ];

const [options, setOptions] = useState(initialOptions);
    useEffect(() => {
        JobService.getjobseeker(localStorage.getItem("jsId")).then(response => {
            //console.log(response);
             setJs(response.data);
        }).catch( error => [
             alert("Error while fetching Jobseeker Profile"+error)        
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
                            <td>Your Id</td>
                            <td>{js.jsId}</td>
                        </tr>
                        <tr>
                            <td>Your Name</td>
                            <td>{js.jsName}</td>
                        </tr>
                        <tr>
                            <td>Your Contact No.</td>
                            <td>{js.jsContactNo}</td>
                        </tr>
                        <tr>
                            <td>Your Email</td>
                            <td>{js.jsEmail}</td>
                        </tr>
                        <tr>
                            <td>Your Area</td>
                            <td>{js.area}</td>
                        </tr>
                        <tr>
                            <td>Your District</td>
                            <td>{js.district}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{js.state}</td>
                        </tr>
                        <tr>
                            <td>PinCode</td>
                            <td>{js.pincode}</td>
                        </tr>
                        
                        </thead>
                        </table>

                 </div>

                 <div>
                    {
                        options.map( option => (
                            <a href={option.path} className={option.color}>{option.label}</a>
                        ))
                     
                    }  
                 </div>
             </div>

    );
}

export default JSProfile
