import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Verifier from "./Verifier";


let JobsMenu = (props) => {
    let navigate = useNavigate();
    const name=props.name;
    const initialMenus = [ 
                 {label:'Home', color:'btn btn-primary m-1', path:'/js/homejs'}, 
                 {label:'View All Jobs', color:'btn btn-danger m-1', path:'/js/jobs'}, 
                 {label:'View Applied Jobs', color:'btn btn-primary m-1', path:'/js/appliedJobs/'+localStorage.getItem("jsId")},
                 {label:'View Basket', color:'btn btn-primary m-1', path:'/js/getbasket/'+localStorage.getItem("jsId")},
                 {label:'View Profile', color:'btn btn-primary m-1', path:'/js/jsprofile/'+localStorage.getItem("jsId")}
          ];

    const [menus, setMenus] = useState(initialMenus);
    const search = () => {

    }

  
        return (<div className="container pr-5 bg-info d-flex ">
                <Verifier name={name}/>
                <div>
                {
                    menus.map( menu => (
                        <a href={menu.path} className={menu.color}>{menu.label}</a>
                    ))
                }
                </div>
                {/* <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded"/>
                    <button type="button" class="btn btn-primary rounded-circle m-1" onClick={search}>Search</button>
                </div> */}
              </div>);
    
}

export default JobsMenu; 