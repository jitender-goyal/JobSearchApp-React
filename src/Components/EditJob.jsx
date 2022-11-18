import EmployerMenu from "./EmployerMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployerService from "../Service/EmployerService";
import { useForm } from "react-hook-form";

const EditJob = () => {
    const { jobId } = useParams();   
    const [message , setMessage] = useState(""); 
    const [job, setJob] = useState({title: "", location:"", description: "", salary: "",minExperience: "",state: "",noticePeriod: ""});
    const [ title, setTitle] = useState("");
    const [ location, setLocation] = useState("");
    const [ description, setDescription] = useState("");
    const [ salary, setSalary] = useState("");
    const [ minExperience, setMinExperience] = useState("");
    const [ noticePeriod, setNoticePeriod] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();

    const editJob = (job) => {
        EmployerService.editJob(localStorage.getItem("empId"),jobId,job).then(response => {
            if(response.status === 201){
                setMessage("Job Updated Successfully");
            }
        })
    }
    useEffect(() => {
        EmployerService.getJob(jobId).then(response => {
            setJob(response.data);
            document.getElementById('title').value = response.data.title;
            document.getElementById('location').value = response.data.location;
            document.getElementById('description').value = response.data.description;
            document.getElementById('salary').value = response.data.salary;
            document.getElementById('minExperience').value = response.data.minExperience;
            document.getElementById('noticePeriod').value = response.data.noticePeriod;
        }).catch(e => console.log("Exception while fetching job info "+e));
    },[]);



    return (
        <div>
            <EmployerMenu name="EditJob"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Update Job</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(editJob)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Title: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                defaultValue=""
                                id="title"
                                onClick={(e) => setTitle(e.target.value)}
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
                                id="location"
                                onClick={(e) => setLocation(e.target.value)}
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
                                id="description"
                                onClick={(e) => setDescription(e.target.value)}
                                { ...register("description", {required: true}) }    
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
                                defaultValue=""
                                id="salary"
                                onClick={(e) => setSalary(e.target.value)}
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
                                defaultValue=""
                                id="minExperience"
                                onClick={(e) => setMinExperience(e.target.value)}
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
                                defaultValue=""
                                id="noticePeriod"
                                onClick={(e) => setNoticePeriod(e.target.value)}
                                { ...register("noticePeriod", {required: true} ) }
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

export default EditJob;