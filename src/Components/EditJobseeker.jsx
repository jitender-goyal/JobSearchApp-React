import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminJobseekerService from "../Service/AdminJobseekerService";
import { useForm } from "react-hook-form";

const EditJobseeker = () => {
    const { jsId } = useParams();   
    const [message , setMessage] = useState(""); 
    const [jobseeker, setJobseeker] = useState({jsName: "", jsEmail:"", jsContactNo: "", area: "",district: "",state: "",pincode: ""});
    const [ jsName, setName] = useState("");
    const [ jsEmail, setEmail] = useState("");
    const [ jsContactNo, setContactNo] = useState("");
    const [ area, setArea] = useState("");
    const [ district, setDistrict] = useState("");
    const [ state, setState] = useState("");
    const [ pincode, setPincode] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();

    const editJobseeker = (jobseeker) => {
        AdminJobseekerService.editJobseeker(jsId, jobseeker).then(response => {
            if(response.status === 200){
                setMessage("Jobseeker Updated Successfully");
            }
        })
    }
    useEffect(() => {
        AdminJobseekerService.getJobseeker(jsId).then(response => {
            setJobseeker(response.data);
            document.getElementById('jsName').value = response.data.jsName;
            document.getElementById('jsEmail').value = response.data.jsEmail;
            document.getElementById('jsContactNo').value = response.data.jsContactNo;
            document.getElementById('area').value = response.data.area;
            document.getElementById('district').value = response.data.district;
            document.getElementById('state').value = response.data.state;
            document.getElementById('pincode').value = response.data.pincode;
        }).catch(e => console.log("Exception while fetching jobseeker info "+e));
    },[]);



    return (
        <div>
            <Menu name="EditJobseeker"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Update Jobseeker</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(editJobseeker)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                defaultValue=""
                                id="jsName"
                                onClick={(e) => setName(e.target.value)}
                                { ...register("jsName", {required: true} ) }
                            />
                            {errors.jsName && errors.jsName.type === "required" && <span className='error'>Name is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Email: </label>
                            <input 
                                className="form-control" 
                                type="email" 
                                id="jsEmail"
                                onClick={(e) => setEmail(e.target.value)}
                                { ...register("jsEmail", {required: true}) }
                            />
                            {errors.jsEmail && errors.jsEmail.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Phone Number: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="jsContactNo"
                                onClick={(e) => setContactNo(e.target.value)}
                                { ...register("jsContactNo", {required: true, minLength:10, maxLength:10 }) }    
                            />
                            {errors.jsContactNo && errors.jsContactNo.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "valueAsNumber" && <span className='error'>Phone Number must contais digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Area: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                defaultValue=""
                                id="area"
                                onClick={(e) => setArea(e.target.value)}
                                { ...register("area", {required: true} ) }
                            />
                            {errors.area && errors.area.type === "required" && <span className='error'>Area is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">District: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                defaultValue=""
                                id="district"
                                onClick={(e) => setDistrict(e.target.value)}
                                { ...register("district", {required: true} ) }
                            />
                            {errors.district && errors.district.type === "required" && <span className='error'>District is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">State: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                defaultValue=""
                                id="state"
                                onClick={(e) => setState(e.target.value)}
                                { ...register("state", {required: true} ) }
                            />
                            {errors.state && errors.state.type === "required" && <span className='error'>State is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Pincode: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="pincode"
                                onClick={(e) => setPincode(e.target.value)}
                                { ...register("pincode", {required: true, minLength:6, maxLength:6}) }    
                            />
                            {errors.pincode && errors.pincode.type === "required" && <span className='error'>Pincode is required</span>}
                            {errors.pincode && errors.pincode.type === "minLength" && <span className='error'>Pincode must contains 6 digits</span>}
                            {errors.pincode && errors.pincode.type === "maxLength" && <span className='error'>Pincode must contais maximum 6 digits</span>}
                            {errors.pincode && errors.pincode.type === "valueAsNumber" && <span className='error'>Pincode must contais digits</span>}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-primary m-3">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default EditJobseeker;