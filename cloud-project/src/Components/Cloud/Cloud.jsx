import Nav from '../nav/Nav'
import Step from '../Steps/steps'
import { useEffect, useState } from 'react';
function Cloud(){
    const [data, setData] = useState();
    useEffect(() =>{
        let prop = localStorage.getItem("Auth");
        setData(JSON.parse(prop));
    }, []);
    return(
        <div className="cloud">
            <Nav profile = {data}></Nav>
            <Step></Step>
        </div>
    );
}

export default Cloud;