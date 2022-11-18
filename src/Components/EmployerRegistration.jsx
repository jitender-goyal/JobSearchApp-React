import { useState } from 'react';
import { useForm } from 'react-hook-form';
import EmployerService from '../Service/EmployerService';
import EmployerMenu from './EmployerMenu';
import {useNavigate} from 'react-router-dom';

const EmployerRegistration = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const registerEmployer = (employer) => {
        EmployerService.registerEmployer(employer).then(response => {
            if (response.status === 201) {
                setMessage("You have Registered Successfully. With ID: "+response.data.empId);
                navigate('/emp/login');
            }
        })
    }

    return (
        <div className='container'>
            {/*<EmployerMenu name="Home" />*/}
            <div className="container w-50 bg-info form">
                <h4>Registration Form</h4>
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(registerEmployer)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("empName", { required: true })}
                            />
                            {errors.empName && errors.empName.type === "required" && <span className='error'>Name is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Contact Number: </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("empContactNo", { required: true, minLength: 10, maxLength: 10 })}
                            />
                            {errors.empContactNo && errors.empContactNo.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.empContactNo && errors.empContactNo.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.empContactNo && errors.empContactNo.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
                            <input
                                className="form-control"
                                type="password"
                                {...register("empPassword", { required: true })}
                            />
                            {errors.empPassword && errors.empPassword.type === "required" && <span className='error'>Password is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Email: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("empEmail", { required: true })}
                            />
                            {errors.empEmail && errors.empEmail.type === "required" && <span className='error'>Email is required</span>}
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
                                {...register("pincode", { required: true, minLength: 6, maxLength: 6 })}
                            />
                            {errors.pincode && errors.pincode.type === "required" && <span className='error'>Pincode is required</span>}
                            {errors.pincode && errors.pincode.type === "minLength" && <span className='error'>Pincode must contains 6 digits</span>}
                            {errors.pincode && errors.pincode.type === "maxLength" && <span className='error'>Pincode must contais maximum 6 digits</span>}
                        </div>
                    </div> 
                   
                    <div className="row">
                        <div className="col d-flex justify-contet-center">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <br></br>
                            <br></br>
                            <a href="/emp/login">Login</a> Already have a login?
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EmployerRegistration;

