import React, { useEffect, useState } from "react";

const Banner = () => {
    const [user, setUser] = useState();
    const [logout, setLogout] = useState();

    useEffect(() => {
        const userName = localStorage.getItem("user");
        if(userName !=null && userName.length > 0){
            setUser("Welcome "+userName);
            setLogout("Logout");
        }        
    },[user]);
    
        return (
                   <div>
                        <div className="container-fluid h-5 banner d-flex justify-content-center pt-3">
                            
                            
                            <div className="w-25 profile">
                                <h4>{user}</h4>
                                <a href='/js/logoutjs' className='link '>{logout}</a>
                            </div>
                           
                            
                        </div>
                   </div>
                   );    
}

export default Banner;

