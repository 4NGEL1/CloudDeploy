import Nav from '../nav/Nav'
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
        </div>
    );
}

export default Cloud;