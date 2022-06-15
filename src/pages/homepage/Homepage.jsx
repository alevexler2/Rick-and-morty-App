import React from "react";
import './Homepage.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CategoryCard from "../../components/categoryCard/CategoryCard";

function Homepage(){
  const episodios = {
    imgEpisodio: "https://www.whatspaper.com/wp-content/uploads/2021/09/rick-and-morty-wallpaper-whatspaper-3.jpg",
    section: "Capitulos",
    urlSection: "/capitulos",
    animation: "animate__animated animate__fadeInRight"
  }
  const personajes = {
    imgEpisodio: "https://myandroidwalls.com/wp-content/uploads/2021/10/4k-Rick-and-Morty-Wallpaper.jpg",
    section: "Personajes",
    urlSection: "/personajes",
    animation: "animate__animated animate__fadeInLeft"
  }

  return(
    <div>
      <Navbar />
      <div className="conteiner-fluid ">
        <div className="row justify-content-center ms-1">
          <div className="col-12">
            <h1 className="display-1 text-center text-light fs-bold fw-bold animate__animated animate__fadeInDown mt-2">Rick & Morty</h1>
          </div>
          <div className=" mb-5  col-lg-3 col-12">
              <CategoryCard section={personajes} />
          </div>
          <div className=" mb-5  col-lg-3 col-12">
              <CategoryCard section={episodios} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Homepage;