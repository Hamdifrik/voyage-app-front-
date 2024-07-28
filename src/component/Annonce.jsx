import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import Navbar from "./Navbar";

const Annonce = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAnnonce = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/annonces/${id}`);

        
        setAnnonce(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getAnnonce();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>

        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowAnnonce = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={annonce.image} alt={annonce.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {annonce.title}</h4>
          <h1 className="display-5"> COUNTRY: {annonce.country} </h1>
          <h2 className="display-5"> CITY: {annonce.city}</h2>
          <p className="lead fw-bolder">
            Hotel name: {annonce.hotel}
            <i className="fa fa-star"></i>
          </p>
          <div className="display-6 fw-bold my-4">
           PRICE: {annonce.price}
          </div>
          <p className="load">
            {annonce.description}
          </p>

          <h4>RESERVATION PHONE NUMBER:  {annonce.phone}</h4>
        </div>
      </>
    );
  };

  return (
    <>
    
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowAnnonce />}
        </div>
      </div>
    </>
  );
};

export default Annonce;
