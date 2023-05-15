import './steps.css';
import Register from '../../assets/Register.png';
import Info from '../../assets/Information.png';
import Verify from '../../assets/Verify.png';
import Payment from '../../assets/Payment.png';
import Sms from '../../assets/Sms.png'
import Practice from '../../assets/Practice.png'
import Succesfully from '../../assets/Succesfully.png'
import Like from '../../assets/like.jpg'
import Rds from '../../assets/Rds.png'
import DataBaseOne from '../../assets/DataBaseOne.png'
import DataBaseTwo from '../../assets/DataBaseTwo.png'
import DataBaseThree from '../../assets/DataBaseThree.png'
import DataBaseFour from '../../assets/DataBaseFour.png'
import DataBaseFive from '../../assets/DataBaseFive.png'
import DataBaseSix from '../../assets/DataBaseSix.png'
import DataBaseSeven from '../../assets/DataBaseSeven.png'
import DataBaseEigth from '../../assets/DataBaseEigth.png'
import DataBaseNine from '../../assets/DataBaseNine.png'
import DataBaseTen from '../../assets/DataBaseTen.png'
import DataBaseTwelve from '../../assets/DataBaseTwelve.png'
import DataBaseConnection from '../../assets/DataBaseConnection.png'
import EC2One from '../../assets/EC2One.png'
import EC2Two from '../../assets/EC2Two.png'
import EC2Three from '../../assets/EC2Three.png'
import EC2Four from '../../assets/EC2Four.png'
import Connect from '../../assets/Connect.png'
import ShhOne from '../../assets/ShhOne.png'
function Steps(){
    return(
        <div className='container'>
            <div className='container-step'>
                <p>Para este caso práctico se decidió utilizar <b>Amazon Web Service</b> como proveedor de la capa de infraestructura. Es decir se utilizara la nube en su nivel de IASS, para ello se requiere configurar los siguientes programas:</p>
                <ol type='B'>
                    <li>Docker, para creación de contenedores.</li>
                    <li>Docker compose, como herramienta para un mejor despligue de contenedores.</li>
                    <li>Git, para la obtención del código fuente de algún repositorio remoto.</li>
                    <li>MySql, como almacén de datos.</li>
                </ol>
            </div>
            <div className='container-step'>
                Como primer acercamiento, es indispensable crear una cuenta en AWS, al crear una cuenta hay que considerar varios aspectos:
                <p>Se requiere un correo electrónico, y un nombre de cuenta</p>
                <a href='https://aws.amazon.com/es/account/'><img src={Register} className='image'/></a>
                El correo se validará con un código de activación con una caducidad de 10 minutos posterior al intento de registro
                <img src={Verify} className='image'></img>
                Posteriormente se configurará toda la información del usuario, de igual forma es indispensable contar con un número de teléfono para validación de identidad
                <img src={Info} className='image'></img>
                Al continuar con el registro es necesario activar un medio de pago electrónico, en el cual se hará una comprobación de fondos, es importante
                tener en consideración que aunque se proporciona una capa gratuita el modelo de negocio de la nube se basa en el uso de los recursos que provee.
                <img src={Payment} className='image'></img>
                al completar el paso anterior se validará la identidad por medio del teléfono celular que se proporcione.
                <img src={Sms} className='image'></img>
                completando los pasos del registro, lo último es seleccionar la capa que como negocio requerimos, para fines de práctica, o incluso de proyectos propios siempre es recomendable comenzar
                con la capa gratuita
                <img src={Practice} className='image'></img>
                Ya con el registro se puede continuar con la exploración/utilización de las herramientas ofertadas por Amazon Web Service
                <img src={Succesfully} className='image'></img>
                <b className='warning'>Es de gran recomendación realizar el uso de herramientas MFA como factor de autenticación, esto como medida de seguridad</b>

            </div>
            <div className='container-step-line'>
                Mi primer despliegue <img src={Like} className='like'></img>
            </div>
            <div className='container-step'>
                Como parte de un primer uso de las herramientas, nos enfocaremos en dos herramientas disponibles en la nube de Amazon:
                <ol>
                    <li>EC2</li>
                    <li>RDS</li>
                </ol>
            </div>
            <div className='container-step'>
                <b>Configurando RDS (Base de datos relacional MySql)</b>
                Iniciamos buscando RDS, y dando inicio a la creación de una base de datos.
                <img src={Rds} className='image-vertical'></img>
                Se inicia, seleccionando una creación estándar, con el motor de su preferencia (Para este caso se trabjará con MySql)
                <img src={DataBaseOne} className='image'></img>
                Es importante seleccionar la capa gratuita, esto para limitar los recursos empleados.
                <img src={DataBaseTwo} className='image'></img>
                Se debe configurar, tanto el nombre de usuario principal en la conexión a la base de datos, así como la contraseña que se utilizará en dicha conexión
                <img src={DataBaseThree} className='image'></img>
                Ahora, el espacio de almacenamiento que se utiliará, recordando que una bondad de la nube es la escalabilidad, en dado caso de requerir esta característica se debe considerar el espacio máximo que se le otorgará a dicha escalabilidad
                <img src={DataBaseFour} className='image'></img>
                Como configuración adicional, se debe establecer el tipo de acceso que se requiere para la base de datos.
                <img src={DataBaseFive} className='image'></img>
                Se pueden configurar mayores parámetros, con fin de un primer acercamiento los anteriores son de principal importancia, el manejo, y configuración de una base de datos se puede comtemplar como un complementario.
                <p>Al finalizar la creación de la base de datos, esta aparecera en el listado de base de datos que se tiene configuradas.</p>
                <img src={DataBaseSix} className='image-vertical'></img>
                El tiempo de creación, puede verse reflejado en algunos minutos posterior a su configuración. Una vez creada la base de datos se es posible conectarse a ella.
                <img src={DataBaseSeven} className='image-vertical'></img>
            </div>
            <div className='container-step'>
                Al tratar de conectar a la base de datos, en un primer intento nos mandará un error
                <img src={DataBaseEigth} className='image-vertical'></img>
                Podría suponerse de una mal configuración, aunque lo que se debe considerar son los grupos de seguridad entrada o salida. Por lo siguiente debemos ubicar las reglas de seguridad
                <img src={DataBaseNine} className='image-vertical'></img>
                Dentro del grupo de seguridad, lo que debemos configurar para una conexión son las reglas de entrada, las que refieren las condiciones que son permtidad de recibir hacia la conexión
                <img src={DataBaseTen} className='image-vertical'></img>
                Por lo que se añadirá una nueva regla, donde el tipo será TCP personalizado, el intervalo de puertos debe ser el considerado en la configuración de la base de datos (3306 en este caso), y el origen
                se considera para cualquier dirección IPv4
                <img src={DataBaseTwelve} className='image-vertical'></img>
                Aplicado lo anterior, se puede conectar desde cualquier punto de partido hacia la base de datos. Con ello hay que tener precaución sobre donde exponemos las credenciales para realizar dicha conexión.
                <img src={DataBaseConnection} className='image-vertical'></img>
            </div>
            <div className='container-step'>
                <b>El próximo paso, es configurar una instancia EC2</b>
                Por consiguiente buscamos EC2 en la barra de busqueda, y lanzamos la instancia, con lo anterior se nos dirigirá a un panel de confguración
                <img src={EC2One} className='image-vertical'></img>
                Se debe configurar el nombre de la instancia, que en sí es lo mínimo requerido para ser considerado como un equipo de cómputo. Por ello es que se deben selccionar un sistema operativo
                en su mayoría basado en el kernel de linux. Con esto se debe considerar el dominio que se posee sobre el manejo del sistema operativo en cuestión. Para el caso práctico se utlizara la dstribución de UBUNTU.
                <img src={EC2Two} className='image-vertical'></img>
                La generación de archivos RSA para facilitar la conexión por ssh hacia la instancia configurada, al generarlas se deben resguardar, y compartir con puntos confiables de conexión.
                <img src={EC2Three} className='image-vertical'></img>
                Al final te muestra un resumen sobre la configuración realizada. Al lanzar la instancia se puede ver en el panel de configuración principal de instancias EC2.
                <img src={EC2Four} className='image-vertical'></img>
            </div>
            <div className='container-step'>
                <b>Conexión a la instancia mediante SSH</b>
                Dado los archivos RSA generados, se puede conectar a la instancia desde cualquier máquina con salida a internet. Para ello se corre el comando
                <p className='code'>ssh -i "Key.pem" ubuntu@ec2-52-14-111-64.us-east-2.compute.amazonaws.com</p>
                Considerando que "key.pem" corresponde al archivo de clave pública RSA generado; y "ubuntu@ec2-52-14-111-64.us-east-2.compute.amazonaws.com" el nombre que identifica a nuestra instancia. 
                El comando se puede recuperar en la parte de conexión de la instancia, en la pestaña "Cliente SSH", bastará con abrir un Consola de comandos, o shell en la máquina que realizará la conexión,
                sobre el mismo directorio en donde se aloja nuestro archivo de clave RSA.
                <img src={Connect} className='image-vertical'></img>
                Con lo anterior, tendremos acceso a la consola de la máquina que tenemos configurada, con el sistema operativo previamente establecido
                <img src={ShhOne} className='image-vertical'></img>
                Para configurar la máquina, y pensar en hacer el despliegue de nuestra aplicación, lo que haremos es alistarla en el sentido de proveer de lo requerido, mencionado al inicio.
                Comenzando por realizar un update de las herramientas del sistema operativo. Comenzando por aplicar todos los comando como un super usuario, es decir con permisos de administrador.
                Para ello en la consola escribimos el siguiente comando y presiomos enter.
                <p className='code'>sudo su</p>
                Hacemos la comprobación de que haya elementos por actualizar en el sistema operativo. Utilizando el gestor de paquetes que provee el sistema operativo.
                <p className='code'>apt-get update</p>
                Obtener los paquetes que se pueden actualizar, y aplicamos
                <p className='code'>apt update</p>
                Posteriormente, creamos un directorio para alojar los archivos que nos interesan
                <p className='code'>mkdir test</p>
                Para visualizar los archivos, carpetas, o programas disponibles en el directorio actual, basta con correr el comando:
                <p className='code'>ls</p>
                Lo cual desplegará una lista sobre los items disponibles, lo cual deberiamos tener una carpeta llamada "test", que recién creamos.
                Para navegar a la carpeta, tecleamos el comando
                <p className='code'>cd ./test</p>
                La cual nos posiiciona dentro de la ruta. Utilizando una herramienta precargada en Ubuntu, obtendremos los ficheros de un repositorio remoto, con la instrucción
                <p className='code'></p>
            </div>
        </div>
    );
}

export default Steps;