import { useEffect, useState } from "react";
import Nav from '../nav/Nav'
import './Pass.css'
import Lambda from '../../assets/Lambda.svg'
import Api from '../../assets/Api.svg'
import Android from '../../assets/Android.svg'
function Pass(){
    const [data, setData] = useState();
    useEffect(() =>{
        let prop = localStorage.getItem("Auth");
        setData(JSON.parse(prop));
    }, []);
    return(
        <div className="pass">
            <Nav profile = {data}></Nav>
            <div>
                <p>El modelo <b>PASS</b> elimina la necesidad de administrar la infraestructura subyacente (normalmente hardware y sistemas operativos) y le permiten centrarse en la implementación y la administración de sus aplicaciones. Esto contribuye a mejorar su eficacia, pues no tiene que preocuparse del aprovisionamiento de recursos, la planificación de la capacidad, el mantenimiento de software, los parches ni ninguna de las demás arduas tareas que conlleva la ejecución de su aplicación.</p>
            </div>
            <section className="pass services">
                <div className="pass components">
                    <h3>AWS Lambda</h3>
                    <img src={Lambda} className="pass svg"></img>
                    <p><a href="https://aws.amazon.com/es/lambda/#">AWS Lambda</a> ejecuta código de la aplicación sin aprovisionar ni administrar la infraestructura. Por ejemplo, puede simplemente escribir y cargar el código de la aplicación como un archivo .zip.</p>
                </div>
                <div className="pass components">
                    <h3>API Gateway</h3>
                    <img src={Api} className="pass svg"></img>
                    <p><a href="https://aws.amazon.com/es/api-gateway/?nc2=h_ql_prod_serv_apig">Amazon API Gateway</a> es un servicio completamente administrado que facilita a los desarrolladores la creación, la publicación, el mantenimiento, el monitoreo y la protección de API a cualquier escala. Las API actúan como la "puerta de entrada" para que las aplicaciones accedan a los datos, la lógica empresarial o la funcionalidad de sus servicios de backend.</p>
                </div>
                <div className="pass components">
                    <h3>Prueba</h3>
                    <img src={Android} className="pass svg"></img>
                    <p><a href="https://aws.amazon.com/es/device-farm/?nc2=h_ql_prod_mo_df">AWS Device Farm</a> es un servicio de prueba de aplicaciones que le permite mejorar la calidad de sus aplicaciones web y móviles al probarlas en un amplio rango de navegadores de escritorio y dispositivos móviles reales, sin tener que aprovisionar y administrar ninguna infraestructura de pruebas.</p>
                </div>
            </section>
        </div>
    );
}

export default Pass;