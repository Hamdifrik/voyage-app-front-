import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Advice.css";
import axios from "axios";

const Advice = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("iduser")) {
        navigate("/login");
      } else {
        const storedUsername = localStorage.getItem('firstname');
        setUsername(storedUsername);
        const response = await axios.get("http://localhost:3000/advises");
        setData(response.data);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className="container">
      {data.map((item, id) => (
        <div className="row justify-content-center align-items-center mb-4" key={id}>
          <div className="col-md-5">
            <div className="card border mb-8">
              <div className="">
                <img className="circle" src={item.photoUser} alt=""/>
               <p className="auther"> {item.auther} </p><br/>
                <p>{item.text}</p>
              </div>
              <div className="">
                <img class="card-img-top" src={item.photoAdvise} alt={item.photoAdvise}  height="400 px" />
              </div>
              <div className="card-footer bg-transparent col-md-6" >Footer</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advice;
