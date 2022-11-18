import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from 'react';
import AdminEmployerService from "../Service/AdminEmployerService";

function Login() {
    
    let [ errorMessage, setErrorMessage ] = useState("");

    let { register, handleSubmit, formState: {errors}} = useForm();
    let navigate = useNavigate();
    
    let [loginFormData, setLoginFormData] = useState(null);

    useEffect(() => {
        if(loginFormData != null) {
            AdminEmployerService.getEmployer(loginFormData.empId).then(response => {
                const emp = response.data;
                if (loginFormData.password === emp.empPassword) {
                    localStorage.setItem("user", emp.empName);
                    localStorage.setItem("empId",loginFormData.empId)
                    navigate('/emp/employerhome');
                } 
                else{
                    setErrorMessage("Invalid User Name/ Password");
                }
            });
        
        }   
        
        
    }, [loginFormData]);
    
    function SubmitForm(loginInfo) {

        setLoginFormData(loginInfo);

    }
    return (
        <div>
            <div className="container w-25 login-title" ><h3>Login</h3>
            </div>

            <div className="container w-25 border rounded border-primary bg-info p-5" >
                <span className='error'>{errorMessage}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label>User Name: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        { ...register("empId", {required: true})}
                     />
                     { errors.empId && errors.empId.type === 'required' && <span className='error'>User Name is required</span>}
                    <br></br>
                    <label> Password: </label>
                    <input 
                        className="form-control" 
                        type="password" 
                        { ...register("password", {required: true})}
                    />
                     { errors.password && errors.password.type === 'required' && <span className='error'>Password is required</span>}
                     <br></br>
                    <button type="submit" className="btn btn-lg w-10 btn-primary">Login</button>
                    <br></br>
                    <br></br>
                    New user-
                    <a href="/emp/register">Click</a> here to register
                </form>
            </div>
        </div>
     
        

    );


}

export default Login;