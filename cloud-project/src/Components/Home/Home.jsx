import { useState, useContext, useEffect } from 'react'
import './Home.css';
import reactLogo from '../../assets/react.svg';
import AmazonLog from '../../assets/AWS.png';
import viteLogo from '../../assets/vite.svg';
import Nav from '../nav/Nav';
import { useLocation } from 'react-router-dom';

function Home({profile}){
  let props = useLocation();
  const [phrase, setPhrase] = useState("Prúebame");
  const [data, setData] = useState();

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  function GetPhrase()
  { 
    fetch("http://localhost:1221/phrase", requestOptions)
        .then(response => response.text())
        .then(result =>
            {
                let response = JSON.parse(result);
                let data = JSON.stringify(response.response)
                let get = JSON.parse(data);
                setPhrase(get.frase);
            })
        .catch(error => console.log('error', error));
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