import React from "react";

function CharacterCard(props){
  
  const{name , image, species, gender } = props.personaje;

  return(
      <div className="card m-1 bg-secondary  col-10 col-lg-2" >
          <div className="">
            <img src={image} className="img-fluid rounded mt-2" alt={name} />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title text-light">Nombre: {name} </h5>
              <p className="card-text text-light">Genero: {gender} </p>
              <p className="card-text text-light">Especie: {species} </p>
            </div>
        </div>
      </div>
  );
}

export default CharacterCard;