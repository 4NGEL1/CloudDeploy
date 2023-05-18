import { useState, useContext, useEffect } from 'react'
import './Home.css';
import reactLogo from '../../assets/react.svg';
import AmazonLog from '../../assets/AWS.png';
import viteLogo from '../../assets/vite.svg';
import Nav from '../nav/Nav';
import { useLocation } from 'react-router-dom';

function Home({profile}){
  let props = useLocation();
  const [phrase, setPhrase] = useState("↑");
  const [data, setData] = useState();
  var frases = [
    "El pasado puede doler pero, tal y como yo lo veo, puedes: o huir de él o aprender",
    "Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas",
    "No tuviste suerte",
    "Un día de preocupación es más agotador que un día de trabajo",
    "¿Soy responsable de mi propia felicidad? ¡No puedo ni ser responsable de mi propio desayuno!",
    "¿Sabes?..",
    "Y un día vas a mirar alrededor y vas a darte cuenta de que todo el mundo te ama, pero nadie te quiere",
    "No puedes retorcerte las manos y arremangarte al mismo tiempo",
    "Aunque tu mente esté confundida, tu corazón siempre sabe la respuesta",
    "Sé que puedo ser egoísta, narcisista y autodestructivo, pero debajo de todo eso, en el fondo, soy una buena persona",
    "Yo no estoy loco, mi realidad es diferente a la tuya",
    "Si te centras en lo que dejas atrás, no podrás ver lo que tienes delante",
    "Se vuelve más fácil. Cada día es un poco más fácil. Pero tienes que hacerlo cada día. Esa es la parte difícil",
    "Es curioso. Cuando miras a alguien a través de gafas de color rosa, todas las banderas rojas parecen simplemente… banderas",
    "Ese es el problema con la vida: o bien sabes lo que quieres y no consigues lo que quieres, u obtienes lo que quieres y ya no sabes lo que quieres",
    "No anticipes los problemas ni te preocupes por lo que pueda suceder: mantente bajo la luz del sol",
    "He roto promesas que para mí eran importantes, por que deje de sentir las cosas como antes",
    "Hoy me quedo con lo bueno, y aunque duela aprendo de lo malo",
    "Gracias por esta aventura, ¡ahora te toca a ti vivir una nueva!",
    "Intenta de nuevo",
    "Si hay una cosa que nadie ha podido comprar con dinero, ésa es el movimiento de la cola de un perro",
    "Y ojalá nunca te abracen por última vez",
    "Yo ya no quiero vencer, sino estar convencido",
    "Voy a mirar a la soga para decir le sigo",
    "Tan solo somos caminos que suelen torcer, miles de complejos sueltos que debemos de vencer",
    "Si eres lo que comes, entonces solo quiero comer lo bueno",
    "Cualquiera puede cocinar",
  ]
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  function GetPhrase()
  { 
    var phrase = frases[Math.floor(Math.random() * frases.length)];
    setPhrase(phrase);
  }
  useEffect(() =>{
    let prop = localStorage.getItem("Auth");
    setData(JSON.parse(prop));
  }, []);
  return (
    <div className="App">
      <Nav profile={data}></Nav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="Cloud logo" />
        </a>
        <a href="https://aws.amazon.com/es/what-is-cloud-computing/?nc2=h_ql_le_int_cc" target="_blank">
          <img src={AmazonLog} className="logo amazon" alt="Cloud logo" />
        </a>
      </div>
      <h1>Vite + React + Cloud</h1>
      <div className="card">
        <button onClick={() => GetPhrase()}>
          Voy a tener suerte
        </button>
        <p className='phrase-style'>
          {phrase}
        </p>
        <p>
          <code>Hola Mundo</code>
        </p>
      </div>
      <p className="read-the-docs">
        Amazon Web Service.
      </p>
    </div>
  )
}

export default Home;