import React, { useEffect, useState } from "react";

let Menu = (props) => {
    const [user, setUser] = useState();
    const [logout, setLogout] = useState();

    useEffect(() => {
        const userName = localStorage.getItem("user");
        if(userName !=null && userName.length > 0){
            setUser("Welcome "+userName);
            setLogout("Logout");
        }        
    },[user]);
    const initialMenus = [ 
                 {label:'Home', color:'btn btn-primary m-1', path:'/emp/home'}, 
                
                 {label:'AddEmployer', color:'btn btn-primary m-1', path:'/emp/addemployer'},
                 
                 {label:'ViewEmployers', color:'btn btn-primary m-1', path:'/emp/viewemployers'},
                 {label:'AddJobseeker', color:'btn btn-primary m-1', path:'/emp/addjobseeker'},
                 
                 {label:'ViewJobseekers', color:'btn btn-primary m-1', path:'/emp/viewjobseekers'}
          ];

    const [menus] = useState(initialMenus);
    const search = () => {

    }

  
        return (<div className="container pr-5 bg-dark d-flex justify-content-between">
                <div>
                {
                    menus.map( menu => (
                        <a href={menu.path} className={menu.color}>{menu.label}</a>
                    ))
                }
                </div>
               
                <div className="w-25 profile">
                                <h4>{user}</h4>
                            </div>
              </div>);
    
}

export default Menu; 