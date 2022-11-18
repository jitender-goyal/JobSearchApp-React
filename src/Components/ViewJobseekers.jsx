import { useEffect, useState } from "react";
import AdminJobseekerService from "../Service/AdminJobseekerService";

import Menu from "./Menu";
import JobseekerGrid from "./JobseekerGrid";
import JobseekerTable from "./JobseekerTable";

const ViewJobseekers = (props) => {
    const name = props.name;
    const [jobseekers, setJobseekers] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [gridLayout, setGridLayout] = useState(true);
   
    useEffect(() => {
        AdminJobseekerService.getJobseekers().then(response => {
            //console.log(response);
            setJobseekers(response.data);
        }).catch( error => [
            console.log("Error while fetching jobseekers info "+error)
        ])
    },[]);

    const search = (e) =>{
        const searchText = e.target.value;
        setSearchStr(searchText);
        if(searchText.toLowerCase() === 'active'){
            setSearchStr("true");
        }
        if(searchText.toLowerCase() === 'in-active'){
            setSearchStr("false");
        }        
    }
    return (
        <div className="container">
            <Menu name={name} />            
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} />       
                    <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => setGridLayout(true)}>Grid</button>
                    <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => setGridLayout(false)}>Table</button>
                </div>
                { gridLayout === true && <JobseekerGrid jobseekers={jobseekers} searchStr={searchStr}/> }
                { gridLayout === false && <JobseekerTable jobseekers={jobseekers} searchStr={searchStr}/> }
            </div>
        </div>
    );
}

export default ViewJobseekers;