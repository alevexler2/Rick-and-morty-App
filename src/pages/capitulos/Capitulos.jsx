import React,{ useState, useEffect } from "react";
import EpisodeCard from "../../components/EpisodeCard/Episode.Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import clientAxios from "../../config/clientAxios";

function Personajes(){
  let[episodios, setEpisodios] = useState([]);
  const getData = ()=>{
    clientAxios.get("episode")
      .then(response => {
        setEpisodios(episodios = response.data.results)
      })
  }
  useEffect(()=>{
    getData();
  },[])

  return(
    <div>
      <Navbar />
      <div className=" animate__animated animate__fadeInLeft ms-2">
        <h1 className="text-center text-light fs-2 m-5">EPISODIOS</h1>
        <div className="d-flex justify-content-center mb-5">
          <ul className="list-group text-decoration-none">
            {episodios.map(episodio=><EpisodeCard episodio={episodio} />)}
          </ul>
        </div>  
      </div>
      <Footer />
    </div>
  );
}

export default Personajes;