import React,{ useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import clientAxios from "../../config/clientAxios";

function Personajes(){
  let[personajes, setPersonajes] = useState([]);
  const getData = ()=>{
    console.log(process.env.REACT_APP_URL_BASE);
    clientAxios.get("character")
      .then(response => {
        setPersonajes(personajes = response.data.results)
      })
  }
  useEffect(()=>{
    getData();
  },[])

  const handleChange = (e) => {
    if (e.length >= 3) {
      const personajesFiltrados = personajes.filter((personaje) => {
        if (personaje.name.toLowerCase().includes(e.toLowerCase())) {
          return personaje;
        }
      })
      setPersonajes(personajesFiltrados);
    } else {
      getData();
    }
  };

  return(
    <div>
      <Navbar handleChange={handleChange} />
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center text-light m-2 col-12">PERSONAJES</h1>
          <div className="container col-12 animate__animated animate__zoomIn">
            <div className="row justify-content-center">
              
                {personajes.map(personaje=><CharacterCard personaje={personaje} />)}
              
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default Personajes;