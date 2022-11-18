import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import JobService from '../Service/JobService';
import JobsMenu from './JobsMenu';



const UpdateJSProfile = () => {
    const {id} =useParams();
    let [message, setMessage] = useState("");

    let { register, handleSubmit, formState: { errors } } = useForm();
    const [js, setJs] = useState({ jsName:"", jsContactNo: "", jsEmail: "",area: "",district:" ",state: "",pincode: ""});
    const [ jsName, setName] = useState("");
    const [ jsEmail, setEmail] = useState("");
    const [ jsContactNo, setContactNo] = useState("");
    const [ area, setArea] = useState("");
    const [ district, setDistrict] = useState("");
    const [ state, setState] = useState("");
    const [ pincode, setPincode] = useState("");
    
    const updateSeeker = (seeker) => {
        JobService.updateSeeker(seeker).then(response => {
            if (response.status === 201) {
                alert("You have Updated Successfully");
            }
        })
    }
    useEffect(()=>{
        JobService.getjobseeker(id).then(response => {
            setJs(response.data);
        
            document.getElementById('jsName').value = response.data.jsName;
            document.getElementById('jsContactNo').value = response.data.jsContactNo;
            document.getElementById('jsEmail').value = response.data.jsEmail;
            document.getElementById('area').value = response.data.area;
            document.getElementById('district').value = response.data.district;
            document.getElementById('state').value = response.data.state;
            document.getElementById('pincode').value = response.data.pincode;
        }).catch(e => console.log("Exception while fetching employer info "+e));
    },[])


    return (
        <div className='container'>
            <JobsMenu name="Home" />
            <div className="container w-25 bg-info form">
                <h4>Update Data Here</h4>
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateSeeker)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue=""
                                id="jsName"
                                onChange={(e) => setName(e.target.value)}
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
                                id="jsContactNo"
                                onChange={(e) => setContactNo(e.target.value)}
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
                                id="jsEmail"
                                onChange={(e) => setEmail(e.target.value)}
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
                                defaultValue=""
                                id="area"
                                onChange={(e) => setArea(e.target.value)}
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
                                defaultValue=""
                                id="district"
                                onChange={(e) => setDistrict(e.target.value)}
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
                                defaultValue=""
                                id="state"
                                onChange={(e) => setState(e.target.value)}
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
                                defaultValue=""
                                id="pincode"
                                onChange={(e) => setPincode(e.target.value)}
                                {...register("pincode", { required: true })}
                            />
                            {errors.pincode && errors.pincode.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col d-flex jutify-contet-center">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default UpdateJSProfile;

