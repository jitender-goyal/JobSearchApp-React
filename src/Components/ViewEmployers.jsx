import { useEffect, useState } from "react";
import AdminEmployerService from "../Service/AdminEmployerService";

import Menu from "./Menu";
import EmployerGrid from "./EmployerGrid";
import EmployerTable from "./EmployerTable";

const ViewEmployers = (props) => {
    const name = props.name;
    const [employers, setEmployers] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [gridLayout, setGridLayout] = useState(true);
   
    useEffect(() => {
        AdminEmployerService.getEmployers().then(response => {
            //console.log(response);
            setEmployers(response.data);
        }).catch( error => [
            console.log("Error while fetching employers info "+error)
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
                { gridLayout === true && <EmployerGrid employers={employers} searchStr={searchStr}/> }
                { gridLayout === false && <EmployerTable employers={employers} searchStr={searchStr}/> }
            </div>
        </div>
    );
}

export default ViewEmployers;