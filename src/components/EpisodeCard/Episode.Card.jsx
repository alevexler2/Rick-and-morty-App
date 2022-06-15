import React from "react";

function EpisodeCard(props){
    console.log(props.episodio);
  const{ name } = props.episodio;

  return(
            <li className="list-item text-light h6">Capitulo: {name}</li>
  );
}

export default EpisodeCard;