import { useState, useContext, useEffect } from 'react'
import './Home.css';
import reactLogo from '../../assets/react.svg';
import AmazonLog from '../../assets/AWS.png';
import viteLogo from '../../assets/vite.svg';
import Nav from '../nav/Nav';
import { useLocation } from 'react-router-dom';
import Phrase from '../../Services/Phrase';

function Home({profile}){
  let props = useLocation();
  const [count, setCount] = useState("Something");
  const [data, setData] = useState();
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
        <button onClick={() => setCount(Phrase())}>
          Voy a tener suerte
        </button>
        <p>
          {count}
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