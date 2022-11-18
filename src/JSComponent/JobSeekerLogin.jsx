import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
 import { useEffect,useState } from 'react';
 import JobService from "../Service/JobService";


function JobSeekerLogin() {

    let [errorMessage, setErrorMessage] = useState("");

    let { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();


    let [loginFormData, setLoginFormData] = useState(null);

    useEffect(() => {
        if (loginFormData != null) {
            JobService.getjobseeker(loginFormData.jsId).then(response => {
                const js = response.data;
                if (loginFormData.password === js.jsPassword) {
                    localStorage.setItem("user", js.jsName);
                    localStorage.setItem("jsId",loginFormData.jsId)
                    navigate('/js/homejs');
                } else {
                    setErrorMessage("Invalid Applicant ID/ Password");
                }
            }).catch(e => {
                setErrorMessage("Invalid Applicant ID/ Password")
            });


        }
    }, [loginFormData]);

    function SubmitForm(loginInfo) {


        setLoginFormData(loginInfo);


    }

    return (
        <div>
            <div className="container w-25 login-title" > <h3>Login</h3>
            </div>


            <div className="container w-25 border rounded border-primary bg-info p-5" >
                <span className='error'>{errorMessage}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label >Job Seeker Id: </label>
                    <input
                        className="form-control"
                        type="text"
                        {...register("jsId", { required: true })}
                    />
                    {errors.jsId && errors.jsId.type === 'required' && <span className='error'>Applicant ID is required</span>}
                    <br></br>
                    <label> Password: </label>
                    <input
                        className="form-control"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && errors.password.type === 'required' && <span className='error'>Password is required</span>}
                    <br></br>
                    <button type="submit" className="btn btn-lg w-10 btn-primary">Login</button><br></br>
                    <br></br>
                    <br></br>
                    New user-
                    <a href="/js/registerjs">Click</a> here to register
                </form>
            </div>
        </div>



    );


}

export default JobSeekerLogin;