import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useEffect, useState } from 'react';

function AdminLogin() {
    let [errorMessage, setErrorMessage] = useState("");

    let { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();


    let [loginFormData, setLoginFormData] = useState(null);

    useEffect(() => {
        if (loginFormData != null) {
            if(loginFormData.userName.toLowerCase() === "admin" && loginFormData.password.toLowerCase() === "password@admin") {
                localStorage.setItem("user", 'Administrator');
                navigate('/emp/home')
            } else {
                setErrorMessage("Invalid ID/ Password");
            }
        }},[loginFormData]);

    function SubmitForm(loginInfo) {setLoginFormData(loginInfo);}

    return (
        <div>
            <div className="container w-25 login-title" > <h3>Login</h3>
            </div>
            <div className="container w-25 border rounded border-secondary bg-info p-5" >
                <span className='error'>{errorMessage}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label>User Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        {...register("userName", { required: true })}
                    />
                    {errors.userName && errors.userName.type === 'required' && <span className='error'>User Name is required</span>}
                    <br></br>
                    <label>Password: </label>
                    <input
                        className="form-control"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && errors.password.type === 'required' && <span className='error'>Password is required</span>}
                    <br></br>
                    <button type="submit" className="btn btn-lg w-10 btn-primary">Login</button><br></br>
                </form>
            </div>
        </div>
    );
}
export default AdminLogin;