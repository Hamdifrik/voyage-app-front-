import React, { useState } from "react";
import { BrowserRouter, useNavigate, Routes, Route, NavLink } from "react-router-dom";
import "./Login.css";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/users");
      const fetchedusers = response.data;
      let access = false;
      for (let i = 0; i < fetchedusers.length; i++) {
        if (
          fetchedusers[i].email === email &&
          fetchedusers[i].password === password
        ) {
          localStorage.setItem("iduser", fetchedusers[i]._id);
          
          localStorage.setItem("firstname", fetchedusers[i].firstname);

          localStorage.setItem("lastname", fetchedusers[i].lastname);
          access = true;
        }
      }
      if (access) {
        alert("Bienvenue !");
        navigate("/");
      } else {
        alert("Adresse e-mail ou mot de passe incorrect.");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <div className="vid-container">
        <video
          className="bgvid"
          autoPlay
          muted
          preload="auto"
          loop
        >
          <source
            src="https://mazwai.com/videvo_files/video/free/2015-09/small_watermarked/postcard_from_big_sur_preview.webm"
            type="video/webm"
          />
        </video>
        <div className="inner-container">
          <video
            className="bgvid inner"
            autoPlay
            muted
            preload="auto"
            loop
          >
            <source
              src="https://mazwai.com/videvo_files/video/free/2015-09/small_watermarked/postcard_from_big_sur_preview.webm?random=1"
              type="video/webm"
            />
          </video>
          <div className="box">
            <h1>Connexion</h1>
            <input
              type="email"
              placeholder="Adresse e-mail"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Se connecter</button>
            <p>
              Pas encore membre ? <NavLink to='signup'>S'inscrire</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
