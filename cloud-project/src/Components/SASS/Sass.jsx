import { useEffect, useState } from "react";
import Nav from '../nav/Nav'
import './Sass.css'
import Alien from '../../assets/Alien.svg'
import Space from '../../assets/Space.svg'
import Face from '../../assets/FaceId.svg'
import Bucket from '../../assets/Bucket.svg'
function Sass(){
    const [data, setData] = useState();
    useEffect(() =>{
        let prop = localStorage.getItem("Auth");
        setData(JSON.parse(prop));
    }, []);
    return(
        <div className="sass">
            <Nav profile = {data}></Nav>
            <div>
                <p><b>SASS</b> proporciona un producto completo que el proveedor del servicio ejecuta y administra. En la mayoría de los casos, quienes hablan de software como servicio en realidad se refieren a aplicaciones de usuario final. Con ello no tiene que pensar en cómo se mantiene el servicio ni en cómo se administra la infraestructura subyacente. </p>
            </div>
            <section className="sass services">
                <div className="sass components">
                    <h3>AWS WorkSpace</h3>
                    <img src={Space} className="sass svg"></img>
                    <p><a href="https://aws.amazon.com/es/workspaces/all-inclusive/">Amazon WorkSpaces</a> es un servicio completamente administrado de virtualización de escritorios para Windows, Linux y Ubuntu que le permite acceder a los recursos desde cualquier dispositivo compatible.</p>
                </div>
                <div className="sass components">
                    <h3>Autenticación</h3>
                    <img src={Face} className="pass svg"></img>
                    <p><a href="https://aws.amazon.com/es/cognito/?nc2=type_a">Amazon Cognito</a>, puede agregar funciones de registro e inicio de sesión para los usuarios y controlar el acceso a sus aplicaciones web y móviles. </p>
                </div>
                <div className="sass components">
                    <h3>Almacenamiento</h3>
                    <img src={Bucket} className="sass svg"></img>
                    <p><a href="https://aws.amazon.com/es/s3/?nc2=type_a">Amazon S3</a> Utilice Amazon S3 para almacenar y recuperar cualquier cantidad de datos mediante un almacenamiento de datos altamente escalable, confiable, rápido y económico.</p>
                </div>
            </section>
        </div>
    );
}

export default Sass;