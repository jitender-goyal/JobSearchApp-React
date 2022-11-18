import { useState } from 'react';
import { useForm } from 'react-hook-form';
import JobService from '../Service/JobService';




const JobSeekerRegistration = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: { errors } } = useForm();

    const registerSeeker = (seeker) => {
        // const skills=seeker.skillsSet.split(",");
        // seeker.skillsSet=skills;
        JobService.registerSeeker(seeker).then(response => {
            if (response.status === 201) {
                alert("You have Registered Successfully:: "+response.data.jsId);
            }
        })
    }


    return (
        <div className='container'>
            
            <div className="container w-50 bg-info form">
                <h4>Registration Form</h4>
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(registerSeeker)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("jsName", { required: true })}
                            />
                            {errors.jsName && errors.jsName.type === "required" && <span className='error'>Name is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Contact Number: </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("jsContactNo", { required: true, minLength: 10, maxLength: 10 })}
                            />
                            {errors.jsContactNo && errors.jsContactNo.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.jsContactNo && errors.jsContactNo.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                        </div>
                    </div>

                    

                    

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
                            <input
                                className="form-control"
                                type="password"
                                {...register("jsPassword", { required: true })}
                            />
                            {errors.jsPassword && errors.jsPassword.type === "required" && <span className='error'>Password is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Email: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("jsEmail", { required: true })}
                            />
                            {errors.jsEmail && errors.jsEmail.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Area: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("area", { required: true })}
                            />
                            {errors.area && errors.area.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">District: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("district", { required: true })}
                            />
                            {errors.district && errors.district.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">State: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("state", { required: true })}
                            />
                            {errors.state && errors.state.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Pincode: </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("pincode", { required: true })}
                            />
                            {errors.pincode && errors.pincode.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col">
                            <label htmlFor="">Skill: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("skillsSet", { required: true })}
                            />
                            {errors.skillSet && errors.skillSet.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div> */}

                   
                    <div>
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <br></br>
                           
                        </div>
                         Already have a login?
                         <br/> <a href="/js/loginjs">Login</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default JobSeekerRegistration;

