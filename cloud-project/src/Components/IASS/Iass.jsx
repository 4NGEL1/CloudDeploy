import { useEffect, useState } from "react";
import Nav from '../nav/Nav'
import Cpu from '../../assets/Cpu.svg';
import DataBase from '../../assets/DataBase.svg'
import Net from '../../assets/Net.svg'
import "./Iass.css";
function Iass(){
    const [data, setData] = useState();
    useEffect(() =>{
        let prop = localStorage.getItem("Auth");
        setData(JSON.parse(prop));
    }, []);
    return(
        <div className="iass">
            <Nav profile = {data}></Nav>
            <div>
                <p>La infraestructura como servicio (IaaS) es un modelo empresarial que ofrece infraestructura de TI, como recursos de computación, almacenamiento y red, mediante pago por uso a través de Internet.</p>
            </div>
            <section className="iass services">
                <div className="iass components">
                    <h3>Computo</h3>
                    <img src={Cpu} className="iass svg"></img>
                    <p>Amazon Elastic Compute Cloud <a href="https://aws.amazon.com/es/ec2/">(Amazon EC2)</a> ofrece la plataforma de computación más amplia y profunda, con más de 500 instancias y la posibilidad de elegir el procesador, almacenamiento, redes, sistema operativo</p>
                </div>
                <div className="iass components">
                    <h3>Almacenamiento</h3>
                    <img src={DataBase} className="iass svg"></img>
                    <p>Amazon Simple Storage Service <a href="https://aws.amazon.com/es/s3/">(Amazon S3)</a> es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento líderes en el sector.</p>
                </div>
                <div className="iass components">
                    <h3>Red</h3>
                    <img src={Net} className="iass svg"></img>
                    <p>Amazon Virtual Private Cloud <a href="https://aws.amazon.com/es/vpc/">(Amazon VPC)</a> le brinda control total sobre su entorno de redes virtuales, incluidas la ubicación de los recursos, la conectividad y la seguridad.</p>
                </div>
            </section>
        </div>
    );
}

export default Iass;