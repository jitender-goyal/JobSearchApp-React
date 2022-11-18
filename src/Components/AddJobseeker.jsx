import { useState } from 'react';
import {useForm} from 'react-hook-form';
import AdminJobseekerService from '../Service/AdminJobseekerService';
import Menu from './Menu';
const AddJobseeker = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();

    const saveJobseeker = (jobseeker) => {
        jobseeker.jsUserName=jobseeker.jsEmail;
        jobseeker.jsPassword="password";
        AdminJobseekerService.saveJobseeker(jobseeker).then(response => {
            if(response.status === 201){
                setMessage("Jobseeker Added Successfully. Jobseeker ID : "+response.data.jsId);
            }
        })
    }


    return(
        <div className='container'> 
            <Menu name="Home"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Add Jobseeker</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveJobseeker)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input 
                                className="form-control" 
                                type="text"
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
                                { ...register("jsContactNo", {required: true, minLength:10, maxLength:10 }) }    
                            />
                            {errors.jsContactNo && errors.jsContactNo.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Area: </label>
                            <input 
                                className="form-control" 
                                type="text"
                            
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

export default AddJobseeker;

