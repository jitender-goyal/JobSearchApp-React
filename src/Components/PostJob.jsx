import { useState } from 'react';
import {useForm} from 'react-hook-form';
import EmployerService from '../Service/EmployerService';
import EmployerMenu from './EmployerMenu';
const PostJob = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();

    const saveJob = (job) => {

        EmployerService.saveJob(localStorage.getItem("empId"),job).then(response => {
            if(response.status === 201){
                setMessage("Job Added Successfully. Job ID : "+response.data.jobId);
            }
        })
    }


    return(
        <div className='container'> 
            <EmployerMenu name="EmployerHome"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Add Job</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveJob)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Title: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                { ...register("title", {required: true} ) }
                            />
                            {errors.title && errors.title.type === "required" && <span className='error'>Title is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Location: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                { ...register("location", {required: true}) }
                            />
                            {errors.location && errors.location.type === "required" && <span className='error'>Location is required</span>}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Description: </label>
                            <input 
                                className="form-control" 
                                type="text"
                            
                                { ...register("description", {required: true} ) }
                            />
                            {errors.description && errors.description.type === "required" && <span className='error'>Description is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Salary: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                
                                { ...register("salary", {required: true} ) }
                            />
                            {errors.salary && errors.salary.type === "required" && <span className='error'>Salary is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Minimum Experience: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                
                                { ...register("minExperience", {required: true} ) }
                            />
                            {errors.minExperience && errors.minExperience.type === "required" && <span className='error'>Minimum Experience is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Notice Period: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                
                                { ...register("noticePeriod", {required: true}) }    
                            />
                            {errors.noticePeriod && errors.noticePeriod.type === "required" && <span className='error'>Notice Period is required</span>}
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

export default PostJob;

