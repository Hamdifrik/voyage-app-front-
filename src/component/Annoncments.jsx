import React, { useEffect, useState } from "react";
import { NavLink,useNavigate  } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import './Annonce.css';
import Navbar from "./Navbar";

const Annoncments = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    
  if(!localStorage.getItem("iduser"))
  navigate("/login");
  
  

    let isMounted = true; // initialiser la variable à true
    const getAnnonce = async() => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/annonces");
      if (isMounted) {
        setData(response.data);
        setFilter(response.data);
        setLoading(false);
      }
    };
    getAnnonce();

    return () => {
      isMounted = false; // changer la variable à false lors du démontage du composant
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterAnnonce = (cat) => {
    const updateListe = data.filter((x) => x.country === cat);
    setFilter(updateListe);
  };

  const ShowAnnonces = () => {
    return (
      
      <div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="button btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button className="button btn btn-outline-dark me-2" onClick={() => filterAnnonce("france")}>
            FRANCE
          </button>
          <button className="button btn btn-outline-dark me-2" onClick={() => filterAnnonce("espange")}>
            ESPANGNE
          </button>
          <button className="button btn btn-outline-dark me-2" onClick={() => filterAnnonce("turkish")}>
          Turkish
          </button>

      
        </div>
        <div className="row" >
          {filter.map((annonce) => {
            return (
              <div className="col-md-3">
                <div class="card h-200 text-center " key={annonce.id}>
                  <img class="card-img-top" src={annonce.image} alt={annonce.title} height="250 px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{annonce.title.substring(0, 12)}...</h5>
                    <p class="card-text lead fw-bold"> {annonce.price} </p>
                    <NavLink to={`/announcement/${annonce._id}`} className="btn btn-outline-dark">
                      detail
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    
    <div>
     
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">  Annonce</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowAnnonces />}
        </div>
     

            </div>
        </div>
    )
}
export default Annoncments;