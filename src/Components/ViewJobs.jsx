import { useEffect, useState } from "react";
import EmployerService from "../Service/EmployerService";

import EmployerMenu from "./EmployerMenu";
import JobsGrid from "./JobsGrid";
import JobsTable from "./JobsTable";

const ViewJobs = (props) => {
    const name = props.name;
    const [jobs, setJobs] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [gridLayout, setGridLayout] = useState(true);
   
    useEffect(() => {
        EmployerService.getJobs(localStorage.getItem("empId")).then(response => {
            //console.log(response);
            setJobs(response.data);
        }).catch( error => [
            console.log("Error while fetching jobs info "+error)
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
            <EmployerMenu name={name} />            
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => setGridLayout(true)}>Grid</button>
                    <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => setGridLayout(false)}>Table</button>
                </div>
                { gridLayout === true && <JobsGrid jobs={jobs} searchStr={searchStr}/> }
                { gridLayout === false && <JobsTable jobs={jobs} searchStr={searchStr}/> }
            </div>
        </div>
    );
}

export default ViewJobs;