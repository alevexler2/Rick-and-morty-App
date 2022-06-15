import React from "react";
import { Link } from "react-router-dom";

function Navbar(props){
  const handleChange = props.handleChange;
    return(
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand text-light fs-2">Rick & Morty</Link>
            <button className="navbar-toggler btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/personajes" className="nav-link active text-light fs-5">Personajes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/capitulos" className="nav-link active text-light fs-5">Capitulos</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handleChange(e.target.value)}/>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;