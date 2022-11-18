import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let EmployerMenu = (props) => {
    const [user, setUser] = useState();
    const empId=localStorage.getItem("empId");
    const { jobId } = useParams();

    useEffect(() => {
        const userName = localStorage.getItem("user");
        if(userName !=null && userName.length > 0){
            setUser("Welcome "+userName);
        }        
    },[user]);
    const initialMenus = [ 
                 {label:'Home', color:'btn btn-primary m-1', path:'/emp/employerhome'}, 
              
                 {label:'PostJob', color:'btn btn-primary m-1', path:'/emp/postjob'},
                 
                 {label:'ViewJobs', color:'btn btn-primary m-1', path:'/emp/viewjobs'},
                 {label:'JobSeekers by JobId', color:'btn btn-primary m-1', path:'/emp/jobseekersbyjob/'+jobId},
                 {label:'ViewProfile', color:'btn btn-primary m-1', path:'/emp/viewemployerprofile/'+empId}
          ];

    const [menus] = useState(initialMenus);
    const search = () => {

    }

  
        return (<div className="container pr-5 bg-dark d-flex justify-content-between">
                <div>
                {
                    menus.map( employermenu => (
                        <a href={employermenu.path} className={employermenu.color}>{employermenu.label}</a>
                    ))
                }
                </div>
               
                <div className="w-25 profile">
                                <h4>{user}</h4>
                            </div>
                
              </div>);
    
}

export default EmployerMenu; 