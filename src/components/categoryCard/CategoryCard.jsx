import { useNavigate } from "react-router-dom";
import styles from './CategoryCard.module.css';

function CategoryCard(props){
 const { imgEpisodio, section, urlSection, animation } = props.section;
 const navigate = useNavigate();
 
  
  return(
    <div className={`container-fluid ${animation} w-75`}>
      <div className="column">
      <div className={`card  d-flex flex-column justify-content-end ${styles.cardSize}`}>
          <img src={imgEpisodio} className="card-img-top rounded-3 img-fluid" alt="..." />
          <div className="card-body card-img-overlay d-flex flex-column justify-content-end align-items-center ">
              <button className="btn btn-secondary text-light px-5" onClick={()=>navigate(urlSection, { replace: true })}>{section}</button>
          </div>
      </div>
      </div>
    </div>
  );
}

export default CategoryCard;