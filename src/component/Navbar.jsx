

import { BrowserRouter, NavLink, Route, Routes,useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
const Navbar = () => {
    //const state=useSelector((state)=>state.handCart) ;  
    const [confirmLogout, setConfirmLogout] = useState(false);
    const navigate = useNavigate();
    const [iduser,setIduser]=useState('');

    
    useEffect(() => {
        const storeiduser = localStorage.getItem('iduser');
        setIduser(storeiduser);
      }, []);

    const handleLogout = () => {
        localStorage.removeItem("iduser");
        localStorage.removeItem("firstname");
        navigate("/login");
      }
      const handleCancelLogout = () => {
        setConfirmLogout(false);
      }
    return (
        <>  
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sw">
                    <div className="container">
                        <NavLink className="navbar-brand fw-bold fs-4" to="/">TRAVEL</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/announcement">announcement</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/planifier"> planification </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/advice">Advice</NavLink>
                                </li>


                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/group">Group</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>


                            </ul>
                            <div className="buttons">
                            <NavLink  to={`/profile/${iduser}`} className="btn btn-outline-dark">  <i className="fa fa-user me-1"></i> Profile </NavLink>
                            <NavLink to="/postadvive" className="btn btn-outline-dark">  <i className="fa fa-photo me-1"></i> Create a post </NavLink>
                                <NavLink to="/login" className="btn btn-outline-dark">  <i className="fa fa-sign-in me-1"></i>Login</NavLink>
                               
                                <NavLink to="/registre" className="btn btn-outline-dark ms-2">  <i className="fa fa-user-plus me-1"></i>Registre</NavLink>
                                
      {confirmLogout ? (
        <div>
          <p>Are you sure you want to logout?</p>
          <button className="btn btn-outline-dark" onClick={handleLogout}>Yes</button>
          <button className="btn btn-outline-dark" onClick={handleCancelLogout}>No</button>
        </div>
      ) : (
        
        <button onClick={() => setConfirmLogout(true)} className="btn btn-outline-dark">  <i className="fa fa-sign-in me-1"></i>Logout</button>
      )}
    

    


                            </div>
                        </div>
                    </div>
                </nav>
            </div>

           
        </>
    )
}

export default Navbar;