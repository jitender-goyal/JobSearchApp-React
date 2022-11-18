import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

const JobSeekerJob = () => {
    let { handleSubmit } = useForm();
    let [searchId, setSearchId] = useState(0);
    let navigate = useNavigate();
    
    const search = (e) =>{
        const searchId = e.target.value;
        setSearchId(searchId);
    }

    function SubmitForm(){
        navigate('/emp/jobseekersbyjob/' + searchId);
    }

    return(
        <div className="container border rounded border-secondary bg-info p-4 w-25 login-title">
            <h4>Search JobSeeker by Job Id</h4>
            <form onSubmit={handleSubmit(SubmitForm)}>
            <label>Job Id:&nbsp;</label>
            <input type={"number"} className="form-control rounded w-60 mb-2" placeholder="Id" id='jobId' onChange={search}/>
            <button type="submit" className="btn btn-lg w-10 btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default JobSeekerJob;