
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./signup.css";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
   
    const [users, setUsers] = useState([
        { firstname: '', lastname: '', email: '', password: '' }
    ]);

    const navigate=useNavigate();
  const changefirstname = (e) => {
    setUsers(users.map(user => {
      if(user === users[0]) {
        return {...user, firstname: e.target.value}
      }
      return user;
    }));
  };

  const changelastname = (e) => {
    setUsers(users.map(user => {
      if(user === users[0]) {
        return {...user, lastname: e.target.value}
      }
      return user;
    }));
  };

  const changeemail = (e) => {
    setUsers(users.map(user => {
      if(user === users[0]) {
        return {...user, email: e.target.value}
      }
      return user;
    }));
  };

  const changepasword = (e) => {
    setUsers(users.map(user => {
      if(user === users[0]) {
        return {...user, password: e.target.value}
      }
      return user;
    }));
  };
  const hand = async (e) => {
    navigate('/login');
      await axios.post('http://localhost:3000/users', users[0])
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
          navigate('/user');

     await axios.get('http://localhost:3000/users')
          .then(response => setUsers(response.data))
          .catch(error => console.error(error));
       
        
   }


  return (
    <div className="signup-form">
      <h2>Inscription</h2>
      <form onSubmit={hand}>
        <div className="form-group">
          <label htmlFor="username">Firstname</label>
          <input type="text" id="username"  onChange={changefirstname} required />
        </div>

        <div className="form-group">
          <label htmlFor="username">Lastname</label>
          <input type="text" id="username"  onChange={changelastname} required />
        </div>
    
        <div className="form-group">
          <label htmlFor="email">e-mail</label>
          <input type="email" id="email"  onChange={changeemail} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"  onChange={changepasword} required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
