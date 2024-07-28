import axios from 'axios';
import { Card, ListGroup, Button } from 'react-bootstrap';

import React, { useEffect, useState } from "react";
import { useNavigate , NavLink  } from 'react-router-dom';
function PlanificationVoyage(props) {
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    

    useEffect(() => {
        const fetchData = async () => {
          if (!localStorage.getItem("iduser")) {
            navigate("/login");
          } else {
            const storedUsername = localStorage.getItem('firstname');
            setUsername(storedUsername);
            
            const response = await axios.get("http://localhost:3000/planifications");
            setData(response.data);
            
          }
        };
        fetchData();
      }, [navigate]);
      return (
        <div>
        <div className="d-flex justify-content-center">
          {data.reverse().map((item, id) => (
            <Card className="shadow" style={{ width: '36rem' }} key={id}>
              <Card.Header className="text-center">Destination: {item.description}</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Date de départ: {item.depart}</ListGroup.Item>
                  <ListGroup.Item>Date de retour: {item.retour}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-center">
                <NavLink variant="primary" to={`/group/${item._id}`} >Rejoindre le groupe</NavLink>
              </Card.Footer>
            </Card>
          ))}
        </div>
        </div>
      );
      
}

export default PlanificationVoyage;