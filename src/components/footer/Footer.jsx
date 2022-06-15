import React from "react";
import styles from './footer.module.css';


function Footer(){
  return(
      <div className="d-flex flex-column mb-3">
        <h2 className="text-light text-center">Rick & Morty App</h2>
        <hr />
        <span className="text-light text-center">© 2022 Company, Inc</span>
      </div>  
  );
}

export default Footer;