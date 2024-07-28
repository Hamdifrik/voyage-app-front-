import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Planifier() {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  
  const [idGroup, setdGroup] = useState('');
  const [planification, setPlanification] = useState({
    description: '',
    depart: '',
    retour: '',
    idUser: '',
    idGroup: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('iduser')) {
      navigate('/login');
    }
    const storedUsername = localStorage.getItem('firstname');
    setUsername(storedUsername);

    const storeidGroup = localStorage.getItem('id');
    setUsername(storeidGroup );

    const storedLastname = localStorage.getItem('lastname');
    setLastname(storedLastname);

    setPlanification({
      ...planification,
      idUser: `${storedUsername} ${storedLastname}`,
    });
  }, []);

  const handleChangeDestination = (e) => {
    setPlanification({ ...planification, description: e.target.value });
  };

  const handleChangedepart = (e) => {
    setPlanification({ ...planification, depart: e.target.value });
  };

  const handleChangeretour = (e) => {
    setPlanification({ ...planification, retour: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/group');
    try {
      await axios.post('http://localhost:3000/planifications', planification);
    
      const response = await axios.get('http://localhost:3000/planifications');
      setPlanification(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: 'black', padding: '20px' }}>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="destination">
              <Form.Label style={{ color: 'white' }}>Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez la destination"
                onChange={handleChangeDestination}
              />
            </Form.Group>

            <Form.Group controlId="depart">
              <Form.Label style={{ color: 'white' }}>Date de départ</Form.Label>
              <Form.Control
                type="date"
                placeholder="Entrez la date de départ"
                onChange={handleChangedepart}
              />
            </Form.Group>

            <Form.Group controlId="retour">
              <Form.Label style={{ color: 'white' }}>Date de retour</Form.Label>
              <Form.Control
                type="date"
                placeholder="Entrez la date de retour"
                onChange={handleChangeretour}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Planifier
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Planifier;
