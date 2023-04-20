import { useEffect, useState } from "react";
import Nav from '../nav/Nav'
function Sass(){
    const [data, setData] = useState();
    useEffect(() =>{
        let prop = localStorage.getItem("Auth");
        setData(JSON.parse(prop));
    }, []);
    return(
        <div className="sass">
            <Nav profile = {data}></Nav>
        </div>
    );
}

export default Sass;