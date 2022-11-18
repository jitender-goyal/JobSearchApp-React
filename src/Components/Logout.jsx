import { useEffect } from "react";

const Logout = () =>{
    useEffect(() => {
        localStorage.removeItem("user");   
        localStorage.removeItem("jsId");  
    })
    return (
        <div className="container w-50 text-success pt-5">
            <h4>Logged Out Successfully.</h4>
            <a href="/">Click</a> here to login again
        </div>
    );
}

export default Logout;