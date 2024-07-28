import React from "react";
import Annoncments from "./Annoncments";
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";


const Home = () => {
    const [username, setUsername] = useState('');
const navigate=useNavigate;


    useEffect(() => {
        
       
      }, []);

    return (
        
        <div className="hero">
            

            <div className="card bg-dark text-white border-0">
                <img className="card-img" src="/asset/travel.jpg" alt="Backround" height="550 px" />
                <div className="card-img-overlay d-flex flex-column justify-content-around">
                    <div className="container">
                    <h3 className="card-title text-black display-3 fw-bolder mb-0"  >WELCOME <span style={{color: "blue"}}>{username}</span>TO NEW SEASON TRAVEL</h3>
                    <p className="card-text text-black lead fs-2"> 
                    CHECK OUT ALL THE TRAVEL 
                    </p> 
                     
                    </div>
                    
                </div>
            </div>
       

<Annoncments/>

            
        </div>
    )
}

export default Home;