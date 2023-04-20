import { useEffect, useState } from "react";
import Nav from '../nav/Nav'
function Pass(){
    const [data, setData] = useState();
    useEffect(() =>{
        let prop = localStorage.getItem("Auth");
        setData(JSON.parse(prop));
    }, []);
    return(
        <div className="pass">
            <Nav profile = {data}></Nav>
        </div>
    );
}

export default Pass;