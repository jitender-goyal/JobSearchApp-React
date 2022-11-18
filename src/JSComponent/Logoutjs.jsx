import { useEffect } from "react";

const Logoutjs = () =>{
    useEffect(() => {
        localStorage.removeItem("user");   
        localStorage.removeItem("jsId");  
        localStorage.removeItem("empId")
    })
    return (
        <div className="container  w-50  mt-5  pt-5 align-items-center bg-secondary text-light">
            <h4 >Logged Out Successfully.</h4>
            <a href="/">Click</a> here to login again
        </div>
    );
}

export default Logoutjs;