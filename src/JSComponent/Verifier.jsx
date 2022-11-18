import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verifier = (props) => {
    const name = props.name;
    const navigate = useNavigate();
  
    useEffect(() => {
        const user = localStorage.getItem("user");
        if(user == null){
            alert("You need to Login First");
            navigate("/js/loginjs");
            
        }
    });

    return (<div></div>)
}

export default Verifier; 